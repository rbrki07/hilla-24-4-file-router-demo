INSERT INTO products (name, sku, price) VALUES ('P1', 'P1-100', 9.99);
INSERT INTO products (name, sku, price) VALUES ('P2', 'P2-200', 2.99);
INSERT INTO products (name, sku, price) VALUES ('P3', 'P3-300', 4.99);
INSERT INTO products (name, sku, price) VALUES ('P4', 'P4-400', 19.99);
INSERT INTO products (name, sku, price) VALUES ('P5', 'P5-500', 49.99);

INSERT INTO customers (name, mail) VALUES ('John Doe', 'jd@example.com');
INSERT INTO customers (name, mail) VALUES ('Jane Roe', 'jr@example.com');

INSERT INTO orders (number, created, customer_id) VALUES ('O-2024-10001', '2024-04-01', 1);
INSERT INTO orders (number, created, customer_id) VALUES ('O-2024-10002', '2024-04-03', 1);
INSERT INTO orders (number, created, customer_id) VALUES ('O-2024-10003', '2024-04-07', 2);

INSERT INTO order_items (order_id, product_id, amount) VALUES (1, 1, 1);
INSERT INTO order_items (order_id, product_id, amount) VALUES (1, 2, 2);
INSERT INTO order_items (order_id, product_id, amount) VALUES (1, 3, 1);
INSERT INTO order_items (order_id, product_id, amount) VALUES (2, 4, 1);
INSERT INTO order_items (order_id, product_id, amount) VALUES (2, 5, 1);
INSERT INTO order_items (order_id, product_id, amount) VALUES (3, 1, 1);
INSERT INTO order_items (order_id, product_id, amount) VALUES (3, 2, 1);
INSERT INTO order_items (order_id, product_id, amount) VALUES (3, 3, 1);
INSERT INTO order_items (order_id, product_id, amount) VALUES (3, 4, 1);
INSERT INTO order_items (order_id, product_id, amount) VALUES (3, 5, 1);