import express from 'express';

import sessionRouter from '../routes/sessionRouter.js'
import userRouter from '../routes/userRouter.js'
import businessRouter from '../routes/businessRouter.js';
import ordersRouter from '../routes/ordersRouter.js';

import errorHandler from '../middlewares/errorHandler.js'



class AppExpress{
    init(){
        this.app = express();
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
    }
    build(){
        this.app.use("/api/sessions", sessionRouter)
        this.app.use("/api/users", userRouter)
        this.app.use('/api/business', businessRouter)
        this.app.use('/api/orders', ordersRouter)

        this.app.use(errorHandler)
    }
    listen(){
        return this.app.listen(process.env.NODE_PORT, () => {
            console.log(`Conectado al server en el puerto: ${process.env.NODE_PORT}`);
        });
    }
}

export default AppExpress
