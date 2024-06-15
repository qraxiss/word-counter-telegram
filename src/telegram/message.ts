export default (bot) => {
  return async (msg) => {
    const chatId = msg.chat.id;

    bot.sendMessage(
      chatId,
      JSON.stringify(
        await strapi.entityService.create("api::word.word", {
          data: {
            word: msg.text,
          },
        }),
        undefined,
        4
      )
    );
  };
};
