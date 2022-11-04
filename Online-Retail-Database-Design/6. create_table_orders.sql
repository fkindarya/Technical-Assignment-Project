CREATE TABLE `orders` (
    `id` bigint(20) NOT NULL,
    `id_customer` int NOT NULL,
    `amount` float,
    `order_name` varchar(255) NOT NULL,
    `order_address` varchar(255) NOT NULL,
    `order_phone_number` varchar(255) NOT NULL,
    `order_date` date NOT NULL,
    `order_status` boolean NOT NULL,
    PRIMARY KEY (`id`),
    FOREIGN KEY (`id_customer`) REFERENCES `customers`(`id`)
);