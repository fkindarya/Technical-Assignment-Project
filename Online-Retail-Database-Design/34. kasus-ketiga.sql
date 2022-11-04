SELECT `categories.name`, COUNT(`product_categories.id_product`) AS `terbanyak`
FROM `categories`
INNER JOIN `product_categories` ON 'categories.id' = `product_categories.id_category`
ORDER BY `terbanyak` DESC;