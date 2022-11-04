SELECT AVG(`amounts`) as `nominal_rata_rata`
FROM `orders`
WHERE MONTH(`orders.order_date`) = MONTH(getdate());