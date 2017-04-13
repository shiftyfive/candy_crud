
exports.seed = (knex) => {
  // Deletes ALL existing entries
  return knex('snacks').del()
    .then(() => {
      // Inserts seed entries
      return knex('snacks').insert([
        {
          id: 1,
          snack_picture_url: 'http://whatsyourdeal.com/grocery-coupons/wp-content/uploads/2015/06/sourpatch.jpg',
          snack_name: 'Sour Patch Kids',
          price: 3.99,
          rating: 5,
        },
        {
          id: 2,
          snack_picture_url: 'https://d1sca6vi4fbl8x.cloudfront.net/media/product/image/0007797502212_500X500_hNWClU3.jpg.355x355_q85.jpg',
          snack_name: 'chocolate covered pretzels',
          price: 4.99,
          rating: 5,
        },
        {
          id: 3,
          snack_picture_url: 'https://i.ytimg.com/vi/A5eTDWyIF_M/hqdefault.jpg',
          snack_name: 'Better Made BBQ chips',
          price: 0.99,
          rating: 4,
        },
      ]);
    });
};
