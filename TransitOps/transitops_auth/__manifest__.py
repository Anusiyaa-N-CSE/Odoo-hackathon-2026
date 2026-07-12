{
    'name': 'TransitOps Authentication',

    'version': '1.0',

    'summary': 'Authentication and Role Based Access Control for TransitOps',

    'description': """
        TransitOps Authentication Module

        Features:
        - Secure Login
        - Email & Password Authentication
        - Role Based Access Control (RBAC)
        - Fleet Manager
        - Driver
        - Safety Officer
        - Financial Analyst
        - Dashboard Access
        - Logout
    """,

    'author': 'Your Team Name',

    'website': 'https://www.transitops.com',

    'category': 'Fleet',

    'license': 'LGPL-3',

    'depends': [
        'base',
        'web',
        'fleet',
        'mail'
    ],

    'data': [

        'security/security.xml',
        'security/ir.model.access.csv',

        'views/login_template.xml',
        'views/dashboard_template.xml',
        'views/menu.xml'

    ],

    'assets': {
        'web.assets_frontend': [

        'transitops_auth/static/src/css/style.css',
        'transitops_auth/static/src/css/login.css',
        'transitops_auth/static/src/css/dashboard.css',
        'transitops_auth/static/src/css/responsive.css',

        'transitops_auth/static/src/js/login.js',
        'transitops_auth/static/src/js/auth.js',
        'transitops_auth/static/src/js/dashboard.js',
        'transitops_auth/static/src/js/logout.js',

    ],
},

    'installable': True,

    'application': True,

    'auto_install': False,
}