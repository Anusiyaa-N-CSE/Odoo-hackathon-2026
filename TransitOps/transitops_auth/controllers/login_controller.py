from odoo import http
from odoo.http import request


class TransitLoginController(http.Controller):

    # -----------------------------
    # Login Page
    # -----------------------------
    @http.route('/transitops/login', type='http', auth='public', website=True)
    def login_page(self, **kwargs):
        return request.render('transitops_auth.login_template')

    # -----------------------------
    # Dashboard Page
    # -----------------------------
    @http.route('/transitops/dashboard', type='http', auth='user', website=True)
    def dashboard(self, **kwargs):
        return request.render('transitops_auth.dashboard_template')

    # -----------------------------
    # Login Authentication
    # -----------------------------
    @http.route('/transitops/authenticate', type='json', auth='public', methods=['POST'], csrf=False)
    def authenticate(self, **kwargs):

        email = kwargs.get("email")
        password = kwargs.get("password")

        user = request.env['transit.user'].sudo().search([
            ('email', '=', email),
            ('password', '=', password)
        ], limit=1)

        if user:

            request.session['username'] = user.name
            request.session['role'] = user.role
            request.session['email'] = user.email

            return {
                "success": True,
                "username": user.name,
                "role": user.role
            }

        return {
            "success": False,
            "message": "Invalid Email or Password"
        }

    # -----------------------------
    # Logout
    # -----------------------------
    @http.route('/transitops/logout', type='http', auth='user')
    def logout(self):

        request.session.logout()

        return request.redirect('/transitops/login')