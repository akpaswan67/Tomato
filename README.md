![Screenshot 2024-09-05 125349](https://github.com/user-attachments/assets/d4c1ce86-253d-4e01-a36c-8507ece87e29)
![Screenshot 2024-09-05 125324](https://github.com/user-attachments/assets/d100b44c-e919-45c2-aab5-6e8915b4bc86)
![Screenshot 2024-09-05 125245](https://github.com/user-attachments/assets/34e1a357-3504-4ea2-81c8-3eb60df4987c)
![Screenshot 2024-09-05 125053](https://github.com/user-attachments/assets/474cd182-ec0f-483e-bccf-1da9d098070d)
![Screenshot 2024-09-05 124929 - Copy](https://github.com/user-attachments/assets/f5d2bd1b-90e3-41a9-8ea5-c199c3851248)
![Screenshot 2024-09-05 124849 - Copy](https://github.com/user-attachments/assets/9b57691b-6715-4a8b-bfa4-bd2f54df7b5b)
![Screenshot 2024-09-05 124415 - Copy](https://github.com/user-attachments/assets/21bec672-80d5-45ed-b5ee-4ae8a891a925)
![Screenshot 2024-09-05 124347 - Copy](https://github.com/user-attachments/assets/b92be0da-ee3b-4100-907d-793868092d9b)
![Screenshot 2024-09-05 124307](https://github.com/user-attachments/assets/2ee710af-2ba3-4995-8470-5be622a8a5fa)
Food Ordering Platform:

I developed a comprehensive food ordering platform designed to provide a seamless and user-friendly experience for both customers and administrators. The platform consists of three core components:

User-Facing Website:
Built using React.js, the front end is highly interactive, providing users with a smooth and dynamic experience. Customers can browse through various food items, view detailed descriptions and pricing, and add items to their shopping cart.
The shopping cart updates dynamically, allowing users to manage their orders in real time before proceeding to checkout.
A secure authentication system enables users to register, log in, and view their order history. User data is securely stored using JWT (JSON Web Tokens) for session management.
Integrated with Stripe, the platform supports secure online payments, allowing users to make payments directly through the website.

Admin Panel:
The admin panel allows restaurant managers to add, update, or remove menu items, and manage incoming orders in real time.
Admins can track and update the status of orders, from preparation to delivery, ensuring that customers are informed about the progress of their orders. This status is reflected dynamically on the user-facing website.
The panel also provides data analytics for order management and sales tracking.

Backend Server:
Developed with Node.js and Express.js, the backend handles API requests from both the user-facing website and admin panel. It is responsible for managing the database, which stores user data, order details, and menu items.
MongoDB is used as the database to store all relevant information. The schema design is optimized to handle a large volume of transactions and queries efficiently.
The server also integrates webhooks from Stripe to handle successful payments, ensuring that the order status is updated accordingly.
Real-Time Order Tracking:

The platform offers real-time updates on order status, from the moment an order is placed until it is delivered. Users can track the status of their order through the user interface, and the system automatically updates when the admin changes the order status.
Overall, this platform streamlines the food ordering process for both customers and administrators, offering real-time functionality, secure payment integration, and scalable backend architecture.
