INSERT INTO `order_details` (`id`, `id_product`, `id_order`, `price`, `quantity`) VALUES
(1, 1, 1, 750000.0, 1),
(2, 3, 1, 45000.0, 1),
(3, 5, 1, 30000.0, 1);

INSERT INTO `orders` (`id`, `id_customer`, `amount`, `order_name`, `order_address`, `order_phone_number`, `order_date`, `order_status`) VALUES
(1, 1, 825000.0, 'Fabyan Kindarya', 'Delta Mandala Sidoarjo', '085157766074', '2022-11-04', 1),