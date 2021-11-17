import app from './app';
import { prepareData } from './config/data.helper'

app.listen(app.get('port'), async () => {
    await prepareData();

    console.log(`Server on port ${app.get('port')}`);
});