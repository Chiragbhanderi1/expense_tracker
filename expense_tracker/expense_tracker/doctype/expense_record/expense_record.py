# Copyright (c) 2023, chirag and contributors
# For license information, please see license.txt

# import frappe
from frappe.model.document import Document

class ExpenseRecord(Document):
	def before_save(self):
		self.formmated_amount =self.amount if self.type =="Credit" else (0 - self.amount)
	pass
