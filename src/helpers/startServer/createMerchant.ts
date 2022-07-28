// @ts-nocheck
import merchantService from '../../services/merchant.service';

const createMerchant = async la => {
  const merchantId = 1;
  const merchantName = await la.contract.methods.merchantName().call();
  const merchantUrl = await la.contract.methods.baseURI().call();

  const _merchant = await merchantService.getMerchant({
    merchantId,
    merchantName,
    merchantUrl,
  });

  if (_merchant.length === 0) {
    const merchant = await merchantService.createMerchant({
      merchantId,
      merchantName,
      merchantUrl,
    });
    console.log(`created a merchant with an ID:`, merchant.merchantId);
    return merchant;
  } else {
    console.log(`merchant ID:`, _merchant[0].merchantId);
    return _merchant;
  }
};

export default createMerchant;
