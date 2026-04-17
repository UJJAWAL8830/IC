export const skinTypes = {
  oily: {
    title: "Oily Skin",
    videoUrl: "https://www.youtube.com/embed/BkwqrmNwFk4?si=eekG2JFcKFOB6qOk",
    dos: [
      { b: "Cleanse Twice Daily:", text: " Use a gentle, foaming cleanser to remove excess oil and impurities without stripping your skin." },
      { b: "Use Non-Comedogenic Products:", text: " Choose skincare and makeup products labeled as non-comedogenic to avoid clogging pores." },
      { b: "Exfoliate Regularly:", text: " Exfoliate with a BHA (beta hydroxy acid) exfoliant, such as salicylic acid, to keep pores clear and prevent breakouts." },
      { b: "Use Oil-Free Moisturizers:", text: " Even oily skin needs hydration. Opt for lightweight, oil-free moisturizers to keep your skin balanced." },
      { b: "Apply Sunscreen Daily:", text: " Protect your skin from UV damage with a non-comedogenic, oil-free sunscreen." },
      { b: "Use Clay Masks:", text: " Incorporate clay masks into your routine once a week to absorb excess oil and purify your skin." }
    ],
    donts: [
      { b: "Don’t Over-Cleanse:", text: " Over-washing can strip your skin of natural oils, prompting it to produce even more oil. Stick to cleansing twice daily." },
      { b: "Don’t Skip Moisturizer:", text: " Skipping moisturizer can lead to dehydrated skin, causing your skin to produce more oil to compensate." },
      { b: "Don’t Use Harsh Products:", text: " Avoid harsh, alcohol-based products that can irritate and dry out your skin, leading to increased oil production." },
      { b: "Don’t Pick or Pop Pimples:", text: " Picking at your skin can lead to scarring and infection. Use targeted treatments to manage breakouts." },
      { b: "Don’t Neglect Your Diet:", text: " A diet high in sugar and processed foods can exacerbate oily skin. Eat a balanced diet rich in fruits, vegetables, and lean proteins." }
    ],
    ingredients: [
      { name: "Salicylic Acid", text: "Helps exfoliate and unclog pores, reducing breakouts." },
      { name: "Niacinamide", text: "Regulates sebum production and soothes inflammation." },
      { name: "Benzoyl Peroxide", text: "Treats acne by killing bacteria and reducing oil production." },
      { name: "Tea Tree Oil", text: "A natural antiseptic that helps control oil and reduce acne." },
      { name: "Witch Hazel", text: "Acts as a natural astringent to tighten pores and control oil." }
    ],
    routine: {
      morning: [
        { label: "Cleanser", text: "Use a gentle foaming cleanser." },
        { label: "Toner", text: "Apply a toner with salicylic acid." },
        { label: "Serum", text: "Use a niacinamide serum to control oil." },
        { label: "Moisturizer", text: "Choose a lightweight, oil-free moisturizer." },
        { label: "Sunscreen", text: "Finish with a non-comedogenic, oil-free sunscreen." }
      ],
      night: [
        { label: "Cleanser", text: "Cleanse with the same gentle foaming cleanser." },
        { label: "Toner", text: "Apply the toner with salicylic acid." },
        { label: "Treatment", text: "Use a benzoyl peroxide or retinol treatment to prevent breakouts." },
        { label: "Moisturizer", text: "Use a lightweight, oil-free moisturizer." }
      ]
    },
    recommendations: ["recoily.jpeg", "recoily2.jpg", "recoily3.jpeg"]
  },
  sensitive: {
    title: "Sensitive Skin",
    videoUrl: "https://www.youtube.com/embed/mmaC1Nfn9uc?si=6ZpREJAzwX5mTjBV",
    dos: [
      { b: "Use gentle, non-irritating products:", text: " Avoid fragrances, alcohol, and harsh chemicals." },
      { b: "Patch test new products:", text: " Wait 24-48 hours to see if any irritation develops." },
      { b: "Avoid over-exfoliating:", text: " Limit exfoliating to once or twice a week at most." }
    ],
    donts: [
      { b: "Don't Use hot water:", text: " Use lukewarm water instead, which is gentler." },
      { b: "Don't Skip moisturising:", text: " Sensitive skin needs hydration to prevent irritation." }
    ],
    ingredients: [
      { name: "Aloe Vera", text: "Soothes and hydrates with anti-inflammatory properties." },
      { name: "Chamomile", text: "Helps soothe and calm sensitive skin." },
      { name: "Cucumber Extract", text: "Cooling and hydrating for irritated skin." },
      { name: "Calendula", text: "Extracted from marigold flowers, used for anti-inflammatory qualities." },
      { name: "Hyaluronic Acid", text: "Wonderful for hydrating the skin without irritation." }
    ],
    routine: {
      morning: [
        { label: "Cleanser", text: "Light, moisturising sulfate-free cleanser." },
        { label: "Toner", text: "Soothing, alcohol-free toner with chamomile or rose water." },
        { label: "Serum", text: "Ingredients like hyaluronic acid or vitamin B5." },
        { label: "Moisturizer", text: "Lightweight, non-comedogenic with ceramides." },
        { label: "Sunscreen", text: "Broad-spectrum SPF 30 every morning." }
      ],
      night: [
        { label: "Cleanser", text: "Same gentle cleanser as morning." },
        { label: "Toner", text: "Reapply to rebalance skin." },
        { label: "Moisturizer", text: "Nourish and hydrate overnight." }
      ]
    },
    recommendations: ["recsens1.jpeg", "recsens2.jpeg", "recsens3.jpeg"]
  },
  dry: {
    title: "Dry Skin",
    videoUrl: "https://www.youtube.com/embed/vcZ7mplvUjY?si=kHkaiiM64rD1UILt",
    dos: [
      { b: "Do: Hydrate from within", text: " Drink plenty of water to keep your skin hydrated from the inside out." },
      { b: "Do: Use a gentle cleanser", text: " Choose a cream-based, fragrance-free cleanser that won't strip your skin's natural oils." },
      { b: "Do: Moisturize regularly", text: " Apply a thick, emollient moisturizer twice a day, especially after bathing." }
    ],
    donts: [
      { b: "Don't: Take long, hot showers", text: " Hot water can further dry out your skin. Stick to short, lukewarm showers." },
      { b: "Don't: Use harsh soaps", text: " Avoid soaps with harsh chemicals and fragrances that can irritate dry skin." }
    ],
    ingredients: [
      { name: "Hyaluronic Acid", text: "Attracts and retains moisture in the skin." },
      { name: "Glycerin", text: "A powerful humectant that helps to keep skin hydrated." },
      { name: "Ceramides", text: "Essential lipids that help to restore the skin's natural barrier." }
    ],
    routine: {
      morning: [
        { label: "Cleanser", text: "Cream-based gentle cleanser." },
        { label: "Serum", text: "Hyaluronic acid for deep hydration." },
        { label: "Moisturizer", text: "Rich, emollient cream." },
        { label: "Sunscreen", text: "Hydrating SPF 30+." }
      ],
      night: [
        { label: "Cleanser", text: "Same gentle cream cleanser." },
        { label: "Treatment", text: "Facial oil or night cream." },
        { label: "Moisturizer", text: "Thick moisturizing balm." }
      ]
    },
    recommendations: ["recdry.jpeg", "recdry2.jpeg", "recdry3.jpeg"]
  },
  combination: {
    title: "Combination Skin",
    videoUrl: "https://www.youtube.com/embed/vcZ7mplvUjY?si=kHkaiiM64rD1UILt",
    dos: [
      { b: "Do: Multi-mask", text: " Use different masks for different areas of your face (e.g., clay for T-zone, hydrating for cheeks)." },
      { b: "Do: Use a mild cleanser", text: " Choose a balanced cleanser that effectively removes oil without drying out your skin." }
    ],
    donts: [
      { b: "Don't: Over-moisturize oily areas", text: " Avoid applying too much moisturizer to your T-zone if it's already oily." },
      { b: "Don't: Neglect dry areas", text: " Make sure to provide enough hydration to the drier parts of your face." }
    ],
    ingredients: [
      { name: "Niacinamide", text: "Helps to balance oil production and improve skin texture." },
      { name: "Squalane", text: "A lightweight oil that mimics the skin's natural sebum." },
      { name: "Lactic Acid", text: "A gentle exfoliant that helps to brighten and smooth the skin." }
    ],
    routine: {
      morning: [
        { label: "Cleanser", text: "Balanced gel or foam cleanser." },
        { label: "Toner", text: "Lightweight, alcohol-free toner." },
        { label: "Moisturizer", text: "Oil-free moisturizer for the T-zone, creamier for cheeks." },
        { label: "Sunscreen", text: "Lightweight, broad-spectrum SPF." }
      ],
      night: [
        { label: "Cleanser", text: "Same balanced cleanser." },
        { label: "Treatment", text: "Targeted treatments for specific areas (e.g., salicylic acid for T-zone)." },
        { label: "Moisturizer", text: "Nourishing night cream for dry areas." }
      ]
    },
    recommendations: ["RECCOMB.jpeg", "RECCOMB2.jpeg", "RECCOMB3.jpeg"]
  }
};

export const demographicGuides = {
  men: {
    title: "Men's Skincare",
    heroImg: "menskin2.avif",
    videoUrl: "https://www.youtube.com/embed/-CeaBTYxaJE?si=7zTecZDCshc1OLDN",
    remedies: [
      { name: "Lemon juice", text: "Apply to the face to help lighten dark spots and blemishes. Rinse after 10 mins." },
      { name: "Aloe vera", text: "Apply gel to help soothe and moisturize the skin. Reduces inflammation." },
      { name: "Tea tree oil", text: "Antibacterial properties that help reduce acne breakouts. Dilute before use." },
      { name: "Cucumber", text: "Cooling effect to reduce puffiness and dark circles around the eyes." },
      { name: "Green tea", text: "Contains antioxidants to protect skin from free radicals. Can used as a toner." }
    ],
    recommendations: ["men2.jpeg", "men3.jpeg", "men4.jpeg", "men5.jpeg", "men6.webp"]
  },
  women: {
    title: "Women's Skincare",
    heroImg: "womenskin2.jpeg",
    videoUrl: "https://www.youtube.com/embed/vcZ7mplvUjY?si=kHkaiiM64rD1UILt",
    remedies: [
       { name: "Honey", text: "A natural humectant that keeps skin soft and hydrated." },
       { name: "Yogurt", text: "Contains lactic acid that gently exfoliates and brightens skin." },
       { name: "Rose Water", text: "Acts as a natural toner and helps maintain skin pH." }
    ],
    recommendations: ["skincare3.jpg", "skincare2.avif", "skincare.jpg"]
  },
  teenagers: {
    title: "Teen Skincare",
    heroImg: "teenskin2.jpeg",
    videoUrl: "https://www.youtube.com/embed/mmaC1Nfn9uc?si=6ZpREJAzwX5mTjBV",
    remedies: [
       { name: "Oatmeal", text: "Soothes irritated skin and absorbs excess oil." },
       { name: "Turmeric", text: "Anti-inflammatory and antibacterial for teenage breakouts." }
    ],
    recommendations: ["teenrec.jpeg", "teenrec2.jpeg", "teenrec3.jpeg", "teenrec4.jpeg"]
  }
};
