const { forwardTo } = require('prisma-binding');

const Query = {
  items: forwardTo('db')
  // async items(parents, args, ctx, info){
  //   const items = await ctx.db.query.item();
  //   return items;
  // }
};

module.exports = Query;
