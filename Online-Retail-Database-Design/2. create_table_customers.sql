CREATE TABLE `customers` (
    `id` bigint(20) AUTO_INCREMENT NOT NULL,
    `full_name` varchar(255) NOT NULL,
    `email` varchar(255) NOT NULL,
    `password` varchar(255) NOT NULL,
    `address` varchar(255) NOT NULL,
    `phone_number` varchar(255) NOT NULL,
    PRIMARY KEY (`id`)
);