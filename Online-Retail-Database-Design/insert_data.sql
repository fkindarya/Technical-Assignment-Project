INSERT INTO `customers` (`id`, `full_name`, `email`, `password`, `address`, `phone_number`) VALUES 
(1, 'Fabyan Kindarya', 'fkindarya@gmail.com', 'rahasia123', 'Delta Mandala Sidoarjo', '085157766074'),
(2, 'Alan Novianto', 'anovianto@gmail.com', 'rahasia123', 'Perum Gresik', '087851802663'),
(3, 'Asyam Faiq', 'afaiq@gmail.com', 'rahasia123', 'Perum Pucang', '082244898420'),
(4, 'Mario Prasetya', 'mprasetya@gmail.com', 'rahasia123', 'Perum Rungkut', '081336197497'),
(5, 'Alfian Nasrullah', 'anasrullah@gmail.com', 'rahasia123', 'Perum Sidoarjo', '085259092223'),
(6, 'Alwan Fauzi', 'afauzi@gmail.com', 'rahasia123', 'Perum Gresik', '0895335333475'),
(7, 'Paulus Bimo', 'pbimo@gmail.com', 'rahasia123', 'Perum Gunung Sari', '087840758430'),
(8, 'Iskandar Dzulqornain', 'dadang@gmail.com', 'rahasia123', 'Perum Madura', '085230874755'),
(9, 'Zaid Abdillah', 'zabdillah@gmail.com', 'rahasia123', 'Perum Sukolilo', '081331913558'),
(10, 'Dhani Fajar', 'dfajar@gmail.com', 'rahasia123', 'Perum Wonogiri', '0895392278055');

INSERT INTO `products` (`id`, `name`, `description`, `price`, `stock`) VALUES
(1, 'Xbox 360', 'Konsol Game untuk menghibur.', 750000.0, 5),
(2, 'Macbook Pro 2015 CTO', 'Intel i5 Ram 16gb SSD 500GB.', 9500000.0, 1),
(3, 'Kahf Facial Wash', 'Facial Wash untuk Pria.', 45000.0, 10),
(4, 'Iphone 11 Pro 256GB Ex Ibox', 'Second ibox no minus.', 10500000.0, 1),
(5, 'Payung Pocket', 'Cocok untuk dibawa kemana mana.', 30000.0, 30),
(6, 'Hoodie Pria', 'Warna bisa request.', 50000.0, 50),
(7, 'Atasan Wanita', 'Warna bisa request.', 80000.0, 50),
(8, 'Sepatu Pria', 'Ukuran bisa request.', 200000.0, 10),
(9, 'Sepatu Wanita', 'Ukuran bisa request.', 300000.0, 10),
(10, 'Wiper Bosch', 'Wiper untuk segala jenis mobil.', 25000.0, 50);

INSERT INTO `categories` (`id`, `name`) VALUES
(1, 'Elektronik'),
(2, 'Komputer & Aksesoris'),
(3, 'Perawatan & Kecantikan'),
(4, 'Handphone & Aksesoris'),
(5, 'Perlengkapan Rumah'),
(6, 'Pakaian Pria'),
(7, 'Pakaian Wanita'),
(8, 'Sepatu Pria'),
(9, 'Sepatu Wanita'),
(10, 'Otomotif');

INSERT INTO `product_categories` (`id`, `id_product`, `id_category`) VALUES
(1, 1, 1),
(2, 2, 2),
(3, 3, 3),
(4, 4, 4),
(5, 5, 5),
(6, 6, 6),
(7, 7, 7),
(8, 8, 8),
(9, 9, 9),
(10, 10, 10);

INSERT INTO `orders` (`id`, `id_customer`, `amount`, `order_name`, `order_address`, `order_phone_number`, `order_date`, `order_status`) VALUES
(1, 1, 825000.0, 'Fabyan Kindarya', 'Delta Mandala Sidoarjo', '085157766074', '2022-11-04', 1),
(2, 2, 45000.0, 'Alan Novianto', 'Perum Gresik', '087851802663', '2022-11-04', 1),
(3, 3, 25000.0, 'Asyam Faiq', 'Perum Pucang', '082244898420', '2022-11-04', 1),
(4, 4, 100000.0, 'Mario Prasetya', 'Perum Rungkut', '081336197497', '2022-11-04', 1),
(5, 5, 200000.0, 'Alfian Nasrullah', 'Perum Sidoarjo', '085259092223', '2022-11-04', 1),
(6, 6, 10500000.0, 'Alwan Fauzi', 'Perum Gresik', '0895335333475', '2022-11-04', 1),
(7, 7, 9500000.0, 'Paulus Bimo', 'Perum Gunung Sari', '087840758430', '2022-11-04', 1),
(8, 8, 160000.0, 'Iskandar Dzulqornain', 'Perum Madura', '085230874755', '2022-11-04', 1),
(9, 9, 300000.0, 'Zaid Abdillah', 'Perum Sukolilo', '081331913558', '2022-11-04', 1),
(10, 10, 50000.0, 'Dhani Fajar', 'Perum Wonogiri', '0895392278055', '2022-11-04', 1);

INSERT INTO `order_details` (`id`, `id_product`, `id_order`, `price`, `quantity`) VALUES
(1, 1, 1, 750000.0, 1),
(2, 3, 1, 45000.0, 1),
(3, 5, 1, 30000.0, 1),
(4, 3, 2, 45000.0, 1),
(5, 10, 3, 25000.0, 1),
(6, 6, 4, 50000.0, 2),
(7, 8, 5, 200000.0, 1),
(8, 4, 6, 10500000.0, 1),
(9, 2, 7, 9500000.0, 1),
(10, 7, 8, 80000.0, 2);
(11, 9, 9, 300000.0, 1);
(12, 10, 10, 25000.0, 2);