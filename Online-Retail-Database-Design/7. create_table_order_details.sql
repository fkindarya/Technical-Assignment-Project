CREATE TABLE `order_details` (
    `id` bigint(20) NOT NULL,
    `id_product` int NOT NULL,
    `id_order` int NOT NULL,
    `price` float NOT NULL,
    `quantity` int NOT NULL,
    PRIMARY KEY (`id`),
    FOREIGN KEY (`id_product`) REFERENCES `products`(`id`),
    FOREIGN KEY (`id_order`) REFERENCES `orders`(`id`)
);