import { cosmos } from '../src';
import { it, expect } from '@jest/globals';

it('cosmos', () => {
    const message = cosmos.bank.v1beta1.MessageComposer.fromPartial.send({
        amount: [
            {
                amount: '1',
                denom: 'uatom'
            }
        ],
        fromAddress: 'myaddress',
        toAddress: 'youraddress'
    });
    expect(message).toMatchSnapshot();
})
