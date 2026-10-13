-- Synthetic data only. Never join unit rows directly to charges for financial sums.
-- 1. One row per shipment, preserving cardinality.
SELECT COUNT(*) AS shipments, SUM(revenue) AS revenue, SUM(cost) AS cost,
       SUM(revenue - cost) AS margin
FROM financial_summary;

-- 2. Detail preaggregation before weight reconciliation.
WITH u AS (
 SELECT shipment_id, COUNT(*) AS unit_count,
        COUNT(weight) AS weighted_units, SUM(weight) AS total_weight
 FROM units GROUP BY shipment_id
)
SELECT s.id, s.declared_weight, u.total_weight,
 CASE WHEN s.declared_weight IS NULL OR u.unit_count IS NULL
           OR u.unit_count <> u.weighted_units THEN 'Missing'
      WHEN CAST(s.declared_weight + 0.5 AS INTEGER) = CAST(u.total_weight + 0.5 AS INTEGER) THEN 'OK'
      ELSE 'Review' END AS weight_status
FROM shipments s LEFT JOIN u ON u.shipment_id = s.id;

-- 3. SLA denominator is shipment count.
SELECT mode, COUNT(*) AS shipments,
       SUM(CASE WHEN actual_days <= sla_days THEN 1 ELSE 0 END) AS on_time,
       100.0 * SUM(CASE WHEN actual_days <= sla_days THEN 1 ELSE 0 END) / COUNT(*) AS on_time_pct
FROM shipments GROUP BY mode;

-- 4. Recorded execution denominator; time benefit is observed synthetic minutes.
SELECT workflow, COUNT(*) AS executions,
       SUM(CASE WHEN status = 'Success' THEN 1 ELSE 0 END) AS successes,
       SUM(minutes_before - minutes_after) / 60.0 AS hours_saved
FROM automation_events GROUP BY workflow;
