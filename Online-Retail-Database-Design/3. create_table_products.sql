CREATE TABLE `products` (
    `id` bigint(20) NOT NULL,
    `name` varchar(255) NOT NULL,
    `description` varchar(255) NOT NULL,
    `price` float NOT NULL,
    `stock` int NOT NULL,
    PRIMARY KEY (`id`)
);