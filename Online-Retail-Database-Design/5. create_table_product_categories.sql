CREATE TABLE `product_categories` (
    `id` bigint(20) AUTO_INCREMENT NOT NULL,
    `id_product` bigint(20) NOT NULL,
    `id_category` bigint(20) NOT NULL,
    PRIMARY KEY (`id`),
    CONSTRAINT `fk_product`
      FOREIGN KEY (`id_product`) REFERENCES shopme.products (`id`)
      ON DELETE RESTRICT
      ON UPDATE RESTRICT,
    CONSTRAINT `fk_category`
      FOREIGN KEY (`id_category`) REFERENCES shopme.categories (`id`)
      ON DELETE RESTRICT
      ON UPDATE RESTRICT
);