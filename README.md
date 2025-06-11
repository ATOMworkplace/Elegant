# Elegant: E-commerce Website

---

**Live Website:** https://elegant-frontend.vercel.app/

## Technical Highlights

This project showcases core full-stack development expertise through:

* **Full-Stack MERN Architecture:** Developed a scalable application using MongoDB, Express.js, React.js, and Node.js.
* **Stripe Payment Gateway Integration:** Implemented secure, server-side Stripe API for payment processing.
* **Role-Based Access Control (RBAC):** Engineered JWT-based authentication for distinct user and admin roles.
* **Centralized State & Routing:** Utilized React Context API and React Router DOM for efficient SPAs.
* **Modular & Responsive UI:** Built adaptive user interfaces with React components and Tailwind CSS.

---
## Screenshots:


![image](https://github.com/user-attachments/assets/b961fb57-3056-4e8d-b585-dcf6c3d8f42c)

![image](https://github.com/user-attachments/assets/19cbf0e1-5191-4ca5-9bbe-bdbc31d73d75)

![image](https://github.com/user-attachments/assets/99e7628c-cd58-498a-8ba1-ed82dc64ad67)

![image](https://github.com/user-attachments/assets/93cee43a-7807-41cb-a99e-cb371dc634fa)

![image](https://github.com/user-attachments/assets/e45a116c-251c-4ad7-aab0-d82b6a8655b0)

![image](https://github.com/user-attachments/assets/cb1b7eae-d826-42f9-8fe7-a439a066ff12)

![image](https://github.com/user-attachments/assets/4cd0f6d3-37af-4597-96aa-5dd6fa2d48b5)

![image](https://github.com/user-attachments/assets/53baa83d-010e-4548-88d3-917e9cbac01a)

![image](https://github.com/user-attachments/assets/02438d4a-93db-4b51-a0c8-2872fcc5a3c4)

![image](https://github.com/user-attachments/assets/aec55a45-21ef-4748-9575-4f1df8ef2d8c)

![image](https://github.com/user-attachments/assets/da5df323-d917-4fd5-ad4a-b8d168612aae)





---

## Running Locally

To get Elegant running on your machine:

1.  **Clone the Repository:**
    ```bash
    git clone [https://github.com/ATOMworkplace/Elegant.git](https://github.com/ATOMworkplace/Elegant.git)
    cd Elegant
    ```

2.  **Install Dependencies:**
    * **Admin Panel:**
        ```bash
        cd admin
        npm install
        ```
    * **Backend:**
        ```bash
        cd ../backend
        npm install
        ```
    * **Frontend:**
        ```bash
        cd ../frontend
        npm install
        ```

3.  **Configure Environment Variables (Backend):**
    * In the `backend` folder, create a `.env` file.
    * Add the following variables, replacing the placeholders with your actual values:
        ```env
        MONGO_URI=your_mongodb_connection_string
        JWT_SECRET=your_jwt_secret_key
        STRIPE_SECRET_KEY=your_stripe_secret_key
        ADMIN_EMAIL=your_admin_email@example.com
        ADMIN_PASSWORD=your_admin_password
        PORT=5000 # Or your preferred port number
        ```

4.  **Start the Servers:**
    * **Backend:**
        ```bash
        cd backend
        npm run server
        ```
    * **Admin Panel:**
        ```bash
        cd ../admin
        npm run dev
        ```
    * **Frontend:**
        ```bash
        cd ../frontend
        npm run dev
        ```
    Open your browser to the frontend's local address (e.g., `http://localhost:5173`).
