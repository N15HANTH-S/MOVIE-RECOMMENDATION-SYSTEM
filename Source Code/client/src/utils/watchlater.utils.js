const watchlaterUtils = {
    check: ({ listWatchLater, mediaId }) => listWatchLater && listWatchLater.find(e => e.mediaId.toString() === mediaId.toString()) !== undefined
  };
  
  export default watchlaterUtils;