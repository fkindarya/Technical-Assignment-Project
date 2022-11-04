CREATE TABLE `product_categories` (
    `id` bigint(20) NOT NULL,
    `id_product` int NOT NULL,
    `id_category` int NOT NULL,
    PRIMARY KEY (`id`),
    FOREIGN KEY (`id_product`) REFERENCES `products`(`id`),
    FOREIGN KEY (`id_category`) REFERENCES `categories`(`id`)
);