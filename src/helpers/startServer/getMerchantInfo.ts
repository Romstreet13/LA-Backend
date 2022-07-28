// @ts-nocheck
import merchantService from '../../services/merchant.service';

const getMerchantInfo = async la => {
  const merchantId = 1;
  const merchantName = await la.contract.methods.merchantName().call();
  const merchantUrl = await la.contract.methods.baseURI().call();

  const _merchant = await merchantService.getMerchant({
    merchantId,
    merchantName,
    merchantUrl,
  });

  // console.log('getMerchantInfo _merchant:', _merchant.length);

  if (_merchant.length === 0) {
    const merchant = await merchantService.createMerchant({
      merchantId,
      merchantName,
      merchantUrl,
    });

    return merchant;
  } else return _merchant;
};

export default getMerchantInfo;
