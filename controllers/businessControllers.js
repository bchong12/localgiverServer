module.exports = {
  addBusiness: async (req, res) => {
    const db = req.app.get("db");
    const {
      name,
      location,
      sector,
      status,
      imageUrl,
      userId,
      story,
      faq,
      youtubeUrl,
    } = req.body;

    const newBusiness = await db.add_business({
      userId,
      name,
      location,
      sector,
      status,
      imageUrl,
      story,
      faq,
      youtubeUrl,
    });

    res.status(200).send(newBusiness[0]);
  },
  addDeals: async (req, res) => {
    const db = req.app.get("db");
    const { title, price } = req.body;
    const { id } = req.params;

    const newDeal = await db.add_deals({ businessId: id, title, price });

    res.status(200).send(newDeal);
  },
  getBusinesses: async (req, res) => {
    const db = req.app.get("db");
    const { userId } = req.body;

    const result = await db.get_my_business({ userId });

    res.status(200).send(result[0]);
  },
  addCart: async (req, res) => {
    const db = req.app.get("db");
    const { title, price } = req.body;

    const result = await db.add_item({ title, price });

    res.status(200).send(result[0]);
  },
  getCart: async (req, res) => {
    const db = req.app.get("db");

    const result = await db.get_cart();
    res.status(200).send(result);
  },
};
