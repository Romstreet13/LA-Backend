import startBlockService from '../../services/startBlock.service';

const updateStartBlock = async (label: string, blockNumber: string) => {
  const blocks = await startBlockService.getStartBlocks();

  console.log('label -->', label);

  if (blocks.length > 0) {
    for (let i = 0; blocks.length > i; i += 1) {
      const currentBlock = Object.values(blocks[i]);

      if (currentBlock.includes(label)) {
        await startBlockService.updateStartBlock(label, blockNumber);
        return;
      }
    }

    await startBlockService.createStartBlock(label, blockNumber);
  } else await startBlockService.createStartBlock(label, blockNumber);
};

export default updateStartBlock;
