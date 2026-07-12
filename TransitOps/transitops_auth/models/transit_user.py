from odoo import models, fields


class TransitUser(models.Model):
    _name = 'transit.user'
    _description = 'TransitOps User'
    _rec_name = 'name'

    # -------------------------
    # Basic Information
    # -------------------------

    name = fields.Char(
        string="Full Name",
        required=True
    )

    email = fields.Char(
        string="Email",
        required=True,
        copy=False
    )

    password = fields.Char(
        string="Password",
        required=True
    )

    # -------------------------
    # User Role
    # -------------------------

    role = fields.Selection([
        ('fleet_manager', 'Fleet Manager'),
        ('driver', 'Driver'),
        ('safety_officer', 'Safety Officer'),
        ('financial_analyst', 'Financial Analyst')
    ],
    string="Role",
    required=True,
    default='driver'
    )

    # -------------------------
    # Account Status
    # -------------------------

    active = fields.Boolean(
        string="Active",
        default=True
    )

    # -------------------------
    # Login Information
    # -------------------------

    last_login = fields.Datetime(
        string="Last Login"
    )

    login_count = fields.Integer(
        string="Login Count",
        default=0
    )

    # -------------------------
    # Audit Fields
    # -------------------------

    create_date = fields.Datetime(
        string="Created On",
        readonly=True
    )

    write_date = fields.Datetime(
        string="Last Updated",
        readonly=True
    )

    # -------------------------
    # Display Name
    # -------------------------

    def name_get(self):

        result = []

        for record in self:

            display_name = f"{record.name} ({record.role})"

            result.append((record.id, display_name))

        return result