CREATE TABLE `order_details` (
    `id` bigint(20) AUTO_INCREMENT NOT NULL,
    `id_product` bigint(20) NOT NULL,
    `id_order` bigint(20) NOT NULL,
    `price` float NOT NULL,
    `quantity` int NOT NULL,
    PRIMARY KEY (`id`),
    CONSTRAINT `fk_product_order`
    	FOREIGN KEY (`id_product`) REFERENCES `products`(`id`)
    	ON DELETE RESTRICT
    	ON UPDATE RESTRICT,
    CONSTRAINT `fk_order`
    	FOREIGN KEY (`id_order`) REFERENCES `orders`(`id`)
    	ON DELETE RESTRICT
    	ON UPDATE RESTRICT
);