// Netlify Function untuk database - DATA LENGKAP
let products = [
    // ==================== STREAMING ====================
    {
        id: 1,
        name: "Netflix Premium",
        category: "streaming",
        plans: [
            { name: "1P1U - 1 Bulan", price: "Rp 32,000" },
            { name: "1P1U - 2 Bulan", price: "Rp 61,000" },
            { name: "1P2U - 1 Bulan", price: "Rp 18,000" },
            { name: "SEMI PRIVATE - 1 Bulan", price: "Rp 35,000" },
            { name: "SEMI PRIVATE - 2 Bulan", price: "Rp 73,000" }
        ],
        icon: "🎬",
        description: "Akses tak terbatas ke semua film dan serial Netflix tanpa iklan"
    },
    {
        id: 2,
        name: "YouTube Premium",
        category: "streaming",
        plans: [
            { name: "INDPLAN - 1 Bulan", price: "Rp 15,000" },
            { name: "INDPLAN - 3 Bulan", price: "Rp 38,000" },
            { name: "FAMPLAN - 1 Bulan", price: "Rp 10,000" },
            { name: "FAMPLAN - 2 Bulan", price: "Rp 15,000" },
            { name: "MIXPLAN - 2 Bulan", price: "Rp 20,000" },
            { name: "MIXPLAN - 3 Bulan", price: "Rp 24,000" },
            { name: "MIXPLAN - 6 Bulan", price: "Rp 38,000" }
        ],
        icon: "📺",
        description: "Tonton YouTube tanpa iklan, download video, dan akses YouTube Music"
    },
    {
        id: 3,
        name: "Disney+",
        category: "streaming",
        plans: [
            { name: "SHARING - 1 Hari", price: "Rp 5,000" },
            { name: "SHARING - 3 Hari", price: "Rp 10,000" },
            { name: "SHARING - 7 Hari", price: "Rp 15,000" },
            { name: "SHARING - 14 Hari", price: "Rp 18,000" },
            { name: "SHARING - 1 Bulan", price: "Rp 30,000" },
            { name: "SHARING - 2 Bulan", price: "Rp 59,000" },
            { name: "SHARING - 6 Bulan", price: "Rp 97,000" },
            { name: "SHARING - 1 Tahun", price: "Rp 150,000" },
            { name: "PRIVATE - 1 Bulan", price: "Rp 75,000" }
        ],
        icon: "🏰",
        description: "Koleksi lengkap film Disney, Marvel, Star Wars, dan National Geographic"
    },
    {
        id: 4,
        name: "Spotify",
        category: "streaming",
        plans: [
            { name: "INDPLAN - 1 Bulan", price: "Rp 16,000" },
            { name: "FAMPLAN - 1 Bulan", price: "Rp 22,000" },
            { name: "FAMPLAN - 2 Bulan", price: "Rp 35,000" },
            { name: "STUDENT - 1 Bulan", price: "Rp 25,000" }
        ],
        icon: "🎵",
        description: "Nikmati musik tanpa iklan, download offline, dan kualitas audio terbaik"
    },
    {
        id: 5,
        name: "WeTV",
        category: "streaming",
        plans: [
            { name: "SHARING 6U - 1 Bulan", price: "Rp 13,000" },
            { name: "SHARING 6U - 3 Bulan", price: "Rp 20,000" },
            { name: "SHARING 8U - 1 Bulan", price: "Rp 12,000" },
            { name: "SHARING 8U - 3 Bulan", price: "Rp 16,000" },
            { name: "SHARING 8U - 6 Bulan", price: "Rp 22,000" },
            { name: "SHARING 8U - 1 Tahun", price: "Rp 30,000" },
            { name: "PRIVATE - 1 Bulan", price: "Rp 38,000" }
        ],
        icon: "📱",
        description: "Platform streaming drama dan film Asia terpopuler"
    },
    {
        id: 6,
        name: "Viu",
        category: "streaming",
        plans: [
            { name: "SHARING - 1 Bulan", price: "Rp 5,000" },
            { name: "SHARING - 3 Bulan", price: "Rp 8,000" },
            { name: "SHARING - 9 Bulan", price: "Rp 11,000" },
            { name: "SHARING - 1 Tahun", price: "Rp 16,000" },
            { name: "PRIVATE - 1 Bulan", price: "Rp 8,000" },
            { name: "PRIVATE - 3 Bulan", price: "Rp 18,000" },
            { name: "PRIVATE - 9 Bulan", price: "Rp 24,000" },
            { name: "PRIVATE - 1 Tahun", price: "Rp 30,000" }
        ],
        icon: "🎭",
        description: "Nonton drama Korea dan Asia tanpa iklan dengan subtitle lengkap"
    },
    {
        id: 7,
        name: "Vision+",
        category: "streaming",
        plans: [
            { name: "PRIVATE PREMIUM - 1 Bulan", price: "Rp 18,000" },
            { name: "PRIVATE PREMIUM SPORT - 1 Bulan", price: "Rp 31,000" }
        ],
        icon: "🎞️",
        description: "Layanan streaming lokal dengan konten eksklusif Indonesia"
    },
    {
        id: 8,
        name: "LokLok",
        category: "streaming",
        plans: [
            { name: "SHARING BASIC (NO TV) - 1 Bulan (3U)", price: "Rp 23,000" },
            { name: "SHARING BASIC (NO TV) - 1 Bulan (8U)", price: "Rp 20,000" },
            { name: "SHARING STANDART (BISA TV) - 1 Bulan (4U)", price: "Rp 28,000" },
            { name: "SHARING STANDART (BISA TV) - 1 Bulan (6U)", price: "Rp 23,000" },
            { name: "PRIVATE - 1 Bulan (basic)", price: "Rp 55,000" },
            { name: "PRIVATE - 1 Bulan (standard)", price: "Rp 76,000" }
        ],
        icon: "📲",
        description: "Aplikasi wallpaper hidup dengan konten eksklusif"
    },
    {
        id: 9,
        name: "Vidio Platinum",
        category: "streaming",
        plans: [
            { name: "Private All Device - 1 Bulan", price: "Rp 75,000" },
            { name: "Sharing Mobile Only - 1 Bulan", price: "Rp 20,000" },
            { name: "Private Mobile Only - 7 Hari", price: "Rp 22,000" },
            { name: "Private Mobile Only - 1 Bulan", price: "Rp 30,000" },
            { name: "Private TV Only - 1 Tahun", price: "Rp 45,000" }
        ],
        icon: "🎪",
        description: "Streaming lokal dengan konten TV, film, dan olahraga Indonesia"
    },
    {
        id: 10,
        name: "Drakor ID",
        category: "streaming",
        plans: [
            { name: "SHARING - 1 Bulan", price: "Rp 10,000" },
            { name: "SHARING - 3 Bulan", price: "Rp 14,000" },
            { name: "SHARING - 6 Bulan", price: "Rp 16,000" },
            { name: "SHARING - 1 Tahun", price: "Rp 21,000" }
        ],
        icon: "🎎",
        description: "Khusus penggemar drama Korea dengan subtitle Indonesia"
    },
    {
        id: 11,
        name: "Dramabox",
        category: "streaming",
        plans: [
            { name: "SHARING - 1 Bulan", price: "Rp 18,000" },
            { name: "SHARING - 3 Bulan", price: "Rp 22,000" },
            { name: "SHARING - 6 Bulan", price: "Rp 29,000" },
            { name: "SHARING - 1 Tahun", price: "Rp 34,000" }
        ],
        icon: "🎬",
        description: "Platform streaming drama pendek interaktif"
    },
    {
        id: 12,
        name: "Bstation",
        category: "streaming",
        plans: [
            { name: "SHARING - 1 Bulan", price: "Rp 12,000" },
            { name: "SHARING - 2 Bulan", price: "Rp 16,000" },
            { name: "SHARING - 3 Bulan", price: "Rp 20,000" },
            { name: "SHARING - 1 Tahun", price: "Rp 35,000" },
            { name: "PRIVATE - 1 Bulan", price: "Rp 52,000" }
        ],
        icon: "📺",
        description: "Platform streaming anime dan konten Asia"
    },

    // ==================== DESAIN & EDITING ====================
    {
        id: 13,
        name: "Canva Pro",
        category: "desain",
        plans: [
            { name: "MEMBER - 3 Hari", price: "Rp 2,000" },
            { name: "MEMBER - 7 Hari", price: "Rp 4,000" },
            { name: "MEMBER - 14 Hari", price: "Rp 5,000" },
            { name: "MEMBER - 1 Bulan", price: "Rp 7,000" },
            { name: "MEMBER - 2 Bulan", price: "Rp 11,000" },
            { name: "MEMBER - 3 Bulan", price: "Rp 14,000" },
            { name: "MEMBER - 1 Tahun", price: "Rp 25,000" },
            { name: "MEMBER - Designer", price: "+ Rp 1,500" },
            { name: "EDUCATION - Lifetime", price: "Rp 35,000" },
            { name: "EDUCATION - Designer", price: "+ Rp 1,500" }
        ],
        icon: "✏️",
        description: "Desain grafis premium dengan template eksklusif dan aset tanpa batas"
    },
    {
        id: 14,
        name: "PicsArt",
        category: "desain",
        plans: [
            { name: "SHARING - 1 Bulan", price: "Rp 8,000" },
            { name: "PRIVATE - 1 Bulan", price: "Rp 18,000" }
        ],
        icon: "🖼️",
        description: "Editor foto dan video lengkap dengan efek dan filter premium"
    },
    {
        id: 15,
        name: "CapCut",
        category: "desain",
        plans: [
            { name: "SHARING - 7 Hari", price: "Rp 10,000" },
            { name: "SHARING - 1 Bulan", price: "Rp 14,000" },
            { name: "PRIVATE - 7 Hari", price: "Rp 14,000" },
            { name: "PRIVATE - 1 Bulan", price: "Rp 35,000" },
            { name: "PRIVATE - 6 Bulan", price: "Rp 170,000" }
        ],
        icon: "🎬",
        description: "Editor video profesional dengan efek khusus dan tools canggih"
    },
    {
        id: 16,
        name: "Alight Motion",
        category: "desain",
        plans: [
            { name: "SHARING 2U - 1 Tahun", price: "Rp 15,000" },
            { name: "PRIVATE - 1 Tahun", price: "Rp 25,000" }
        ],
        icon: "⚡",
        description: "Editor video profesional dengan efek visual dan animasi canggih"
    },

    // ==================== AI TOOLS ====================
    {
        id: 17,
        name: "ChatGPT Plus",
        category: "ai",
        plans: [
            { name: "SHARING - 7 Hari", price: "Rp 22,000" },
            { name: "SHARING - 1 Bulan (8u)", price: "Rp 34,000" },
            { name: "SHARING - 1 Bulan (10u)", price: "Rp 29,000" },
            { name: "PRIVATE - 1 Bulan", price: "Rp 100,000" }
        ],
        icon: "🤖",
        description: "Akses ChatGPT dengan prioritas, fitur terbaru, dan respons lebih cepat"
    },
    {
        id: 18,
        name: "Perplexity",
        category: "ai",
        plans: [
            { name: "SHARING 5U - 1 Bulan", price: "Rp 18,000" },
            { name: "PRIVATE - 1 Bulan", price: "Rp 25,000" }
        ],
        icon: "🔍",
        description: "AI pencarian dengan sumber terpercaya dan kemampuan analisis mendalam"
    },
    {
        id: 19,
        name: "Gemini",
        category: "ai",
        plans: [
            { name: "PRIVATE - 1 Bulan", price: "Rp 18,000" },
            { name: "PRIVATE - 1 Tahun", price: "Rp 30,000" }
        ],
        icon: "✨",
        description: "AI dari Google dengan kemampuan multimodal dan analisis canggih"
    },

    // ==================== LAINNYA ====================
    {
        id: 20,
        name: "QuillBot",
        category: "lainnya",
        plans: [
            { name: "1 Bulan", price: "Rp 15,000" },
            { name: "3 Bulan", price: "Rp 20,000" },
            { name: "6 Bulan", price: "Rp 32,000" },
            { name: "1 Tahun", price: "Rp 69,000" }
        ],
        icon: "✍️",
        description: "Alat parafrase dan penulisan AI untuk meningkatkan kualitas teks"
    },
    {
        id: 21,
        name: "Scribd",
        category: "lainnya",
        plans: [
            { name: "SHARING - 1 Bulan", price: "Rp 15,000" },
            { name: "PRIVATE - 1 Bulan", price: "Rp 25,000" }
        ],
        icon: "📚",
        description: "Perpustakaan digital dengan buku, audiobook, dan dokumen premium"
    },
    {
        id: 22,
        name: "Grammarly",
        category: "lainnya",
        plans: [
            { name: "SHARING - 1 Bulan", price: "Rp 15,000" },
            { name: "SHARING - 1 Tahun", price: "Rp 31,000" },
            { name: "PRIVATE - 1 Bulan", price: "Rp 40,000" }
        ],
        icon: "📝",
        description: "Asisten penulisan AI untuk grammar dan spelling yang lebih baik"
    },
    {
        id: 23,
        name: "Get Contact",
        category: "lainnya",
        plans: [
            { name: "1 Bulan", price: "Rp 15,000" }
        ],
        icon: "📞",
        description: "Identifikasi penelepon dan manajemen kontak yang cerdas"
    }
];

let testimonials = [
    {
        id: 1,
        productName: "Dramabox 1 Bulan",
        screenshot: "Foto/testi 1.jpg"
    },
    {
        id: 2,
        productName: "Iqiyi 1 Tahun", 
        screenshot: "Foto/testi 2.jpg"
    },
    {
        id: 3,
        productName: "Vision+ 1 Bulan",
        screenshot: "Foto/testi 3.jpg"
    },
    {
        id: 4,
        productName: "ChatGPT Plus 1 Bulan",
        screenshot: "Foto/testi 4.jpg"
    },
    {
        id: 5,
        productName: "Canva 7 Hari",
        screenshot: "Foto/testi 5.jpg"
    },
    {
        id: 6,
        productName: "Canva 1 Tahun",
        screenshot: "Foto/testi 6.jpg"
    },
    {
        id: 7,
        productName: "Spotify 1 Bulan",
        screenshot: "Foto/testi 7.jpg"
    },
    {
        id: 8,
        productName: "Viu 1 Tahun",
        screenshot: "Foto/testi 8.jpg"
    }
];

exports.handler = async function(event, context) {
    const { httpMethod: method, path, queryStringParameters: query, body } = event;
    
    console.log('Database Function Called:', { method, path, query });
    
    // CORS headers
    const headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Content-Type': 'application/json'
    };

    // Handle preflight requests
    if (method === 'OPTIONS') {
        return {
            statusCode: 200,
            headers,
            body: ''
        };
    }

    try {
        // Simple routing based on path
        if (path.includes('/products')) {
            // GET all products or by category
            if (method === 'GET') {
                const category = query?.category;
                let resultProducts = products;
                
                if (category && category !== 'all') {
                    resultProducts = products.filter(p => p.category === category);
                }
                
                return {
                    statusCode: 200,
                    headers,
                    body: JSON.stringify(resultProducts)
                };
            }
            
            // POST new product
            if (method === 'POST') {
                const newProduct = JSON.parse(body);
                newProduct.id = Math.max(...products.map(p => p.id), 0) + 1;
                products.push(newProduct);
                
                return {
                    statusCode: 201,
                    headers,
                    body: JSON.stringify(newProduct)
                };
            }
            
            // Handle product ID in path
            const pathParts = path.split('/');
            const productId = parseInt(pathParts[pathParts.length - 1]);
            
            if (!isNaN(productId)) {
                // PUT update product
                if (method === 'PUT') {
                    const updatedProduct = JSON.parse(body);
                    const index = products.findIndex(p => p.id === productId);
                    
                    if (index !== -1) {
                        products[index] = { ...products[index], ...updatedProduct };
                        return {
                            statusCode: 200,
                            headers,
                            body: JSON.stringify(products[index])
                        };
                    }
                    
                    return {
                        statusCode: 404,
                        headers,
                        body: JSON.stringify({ error: 'Product not found' })
                    };
                }
                
                // DELETE product
                if (method === 'DELETE') {
                    const index = products.findIndex(p => p.id === productId);
                    
                    if (index !== -1) {
                        const deletedProduct = products.splice(index, 1)[0];
                        return {
                            statusCode: 200,
                            headers,
                            body: JSON.stringify({ 
                                message: 'Product deleted successfully',
                                product: deletedProduct
                            })
                        };
                    }
                    
                    return {
                        statusCode: 404,
                        headers,
                        body: JSON.stringify({ error: 'Product not found' })
                    };
                }
            }
        }
        
        // Testimonials endpoints
        if (path.includes('/testimonials')) {
            // GET all testimonials
            if (method === 'GET') {
                return {
                    statusCode: 200,
                    headers,
                    body: JSON.stringify(testimonials)
                };
            }
            
            // POST new testimonial
            if (method === 'POST') {
                const newTestimonial = JSON.parse(body);
                newTestimonial.id = Math.max(...testimonials.map(t => t.id), 0) + 1;
                testimonials.push(newTestimonial);
                
                return {
                    statusCode: 201,
                    headers,
                    body: JSON.stringify(newTestimonial)
                };
            }
            
            // Handle testimonial ID in path
            const pathParts = path.split('/');
            const testimonialId = parseInt(pathParts[pathParts.length - 1]);
            
            if (!isNaN(testimonialId)) {
                // DELETE testimonial
                if (method === 'DELETE') {
                    const index = testimonials.findIndex(t => t.id === testimonialId);
                    
                    if (index !== -1) {
                        const deletedTestimonial = testimonials.splice(index, 1)[0];
                        return {
                            statusCode: 200,
                            headers,
                            body: JSON.stringify({ 
                                message: 'Testimonial deleted successfully',
                                testimonial: deletedTestimonial
                            })
                        };
                    }
                    
                    return {
                        statusCode: 404,
                        headers,
                        body: JSON.stringify({ error: 'Testimonial not found' })
                    };
                }
            }
        }
        
        // Stats endpoint
        if (path.includes('/stats')) {
            if (method === 'GET') {
                const stats = {
                    totalProducts: products.length,
                    totalTestimonials: testimonials.length,
                    streamingCount: products.filter(p => p.category === 'streaming').length,
                    desainCount: products.filter(p => p.category === 'desain').length,
                    aiCount: products.filter(p => p.category === 'ai').length,
                    lainnyaCount: products.filter(p => p.category === 'lainnya').length
                };
                
                return {
                    statusCode: 200,
                    headers,
                    body: JSON.stringify(stats)
                };
            }
        }
        
        // Default response for unknown endpoints
        return {
            statusCode: 404,
            headers,
            body: JSON.stringify({ 
                error: 'Endpoint not found',
                availableEndpoints: ['/products', '/testimonials', '/stats']
            })
        };
        
    } catch (error) {
        console.error('Database function error:', error);
        return {
            statusCode: 500,
            headers,
            body: JSON.stringify({ 
                error: 'Internal server error',
                message: error.message 
            })
        };
    }
};
