-- Create the Users table
CREATE TABLE IF NOT EXISTS Users (
  user_id UUID PRIMARY KEY,
  user_name VARCHAR(255),
  user_email VARCHAR(255) UNIQUE,
  user_password VARCHAR(255),
  user_image VARCHAR(255),
  total_orders INT,
  created_at TIMESTAMP,
  last_logged_in TIMESTAMP
);

-- Insert sample data if needed
INSERT INTO Users (user_id, user_name, user_email, user_password, user_image, total_orders, created_at, last_logged_in)
VALUES
  ('user1', 'Bharath Vadde', 'john@example.com', 'QAYxc@12345B', 'image1.jpg', 5, '2023-01-01 12:00:00', '2023-10-01 14:30:00'),
  ('user2', 'Ravi Chandra', 'jane@example.com', 'QAYxc@12345R', 'image2.jpg', 10, '2023-02-15 08:45:00', '2023-09-28 17:15:00');
