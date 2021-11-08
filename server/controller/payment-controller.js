 import paytmchecksum from '../paytm/PaytmChecksum.js';
 import { paytmParams, paytmMerchantKey } from '../index.js';

export const addPaymentGateway = async (_request, response) => {
    let paytmChecksum = await paytmchecksum.generateSignature(paytmParams, paytmMerchantKey);
    try {
        let params = {
            ...paytmParams,
            'CHECKSUMHASH': paytmChecksum
        };
        response.json(params);
    } catch (error) {
        console.log(error);
    }
}
