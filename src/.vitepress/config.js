export default {
    title: 'CASRP Bot Docs',
    lastUpdate: true,
    markdown: {
        lineNumbers: true
    },
    themeConfig: {
        siteTitle: 'California State Roleplay',
        logo: '/favicon.png',
        lastUpdated: true,
        algolia: {
            appId: '8J64VVRP8K',
            apiKey: 'a18e2f4cc5665f6602c5631fd868adfd',
            indexName: 'vitepress'
        },
        nav: [
            {
                text: 'Introduction',
                link: '/intro/'
            },
            {
                text: 'FAQ',
                link: '/faq/'
            },
        ],
        sidebar: [
            {
                text: 'Information',
                collapsible: true,
                items: [
                    { text: '👋 Introduction', link: '/intro/' },
                    { text: '❓ Frequently Asked Questions', link: '/faq/' },
                ]
            },
            {
                text: 'Commands',
                collapsible: true,
                items: [
                    { text: '⚙ Admin', link: '/commands/admin.md' },
                    { text: '🎁 Giveaways', link: '/commands/giveaways.md' },
                    { text: '📄 Information', link: '/commands/information.md' },
                    { text: '📨 Invites', link: '/commands/invites' },
                    { text: '🔨 Moderation', link: '/commands/moderation' },
                    { text: '🎵 Music', link: '/commands/music' },
                    { text: '🎫 Tickets', link: '/commands/tickets' },
                    { text: '💡 Suggestions', link: '/commands/suggestions' },
                ]
            },
        ]
    }
}