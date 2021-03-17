{
  product: {
    id: {type: Number, required: true},
    style_Id: {type: Number, required: true},
    name: String,
    slogan: String,
    description: String,
    category: String,
    default_price: String,
    created_at: {type: Date.now, required: true},
    updated_at: {type: Date.now, required: true},
    features: [{
      feature: String,
      value: String,
    }],
    related: []
  },
  styles: {
    id: {type: Number, required: true},
    name: String,
    original_price: Mixed,
    sale_price: Mixed,
    default: Boolean,
    skus: {
      sku_id: {
        quantity: Number,
        size: String,
      }
    }
    photos: [
      thumbnail_url: String,
      url: String,
    ]
  },
};