CREATE TABLE `customers` (
    `id` bigint(20) NOT NULL,
    `full_name` varchar(255) NOT NULL,
    `email` varchar(255) NOT NULL,
    `password` varchar(255) NOT NULL,
    `address` varchar(255) NOT NULL,
    `phone_number` varchar(255) NOT NULL,
    PRIMARY KEY (`id`)
);

CREATE TABLE `products` (
    `id` bigint(20) NOT NULL,
    `name` varchar(255) NOT NULL,
    `description` varchar(255) NOT NULL,
    `price` float NOT NULL,
    `stock` int NOT NULL,
    PRIMARY KEY (`id`)
);

CREATE TABLE `categories` (
    `id` bigint(20) NOT NULL,
    `name` varchar(255) NOT NULL,
    PRIMARY KEY (`id`)
);

CREATE TABLE `product_categories` (
    `id` bigint(20) NOT NULL,
    `id_product` int NOT NULL,
    `id_category` int NOT NULL,
    PRIMARY KEY (`id`),
    FOREIGN KEY (`id_product`) REFERENCES `products`(`id`),
    FOREIGN KEY (`id_category`) REFERENCES `categories`(`id`)
);

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