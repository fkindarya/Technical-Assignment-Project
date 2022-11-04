SELECT `products.name`, count(`oder_details.id_product`) AS `terjual`
FROM `products` 
INNER JOIN `order_details` ON `products.id` = `order_details.id_product`
ORDER BY `terjual` DESC
LIMIT 3;