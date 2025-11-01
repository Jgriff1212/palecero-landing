# GoHighLevel Setup Guide
## The Villas at Palecero Landing Page

This guide will walk you through setting up GoHighLevel (GHL) to work with your landing page in about 15 minutes.

---

## 📋 SETUP CHECKLIST

- [ ] Create GHL Sub-Account for The Villas at Palecero
- [ ] Create Contact Form
- [ ] Create Calendar for Property Tours
- [ ] Add Team Members (You + Property Manager)
- [ ] Set Up Automated Workflows
- [ ] Replace Form Code on Landing Page
- [ ] Replace Calendar Link on Landing Page
- [ ] Test End-to-End

---

## STEP 1: Create Sub-Account (5 minutes)

### 1.1 Navigate to Sub-Accounts
```
GHL Dashboard → Settings (gear icon) → Sub-Accounts → Create Sub-Account
```

### 1.2 Fill in Details
```
Business Name: The Villas at Palecero
Business Address: 339-B Aquino Ave, Tontitown, AR 72762
Phone: (918) 995-4355
Industry: Real Estate
```

### 1.3 Click "Create Sub-Account"

✅ **Done!** Now switch to this sub-account for the remaining steps.

---

## STEP 2: Create Contact Form (5 minutes)

### 2.1 Navigate to Forms
```
Left Sidebar → Sites → Forms → Create Form
```

### 2.2 Form Settings
```
Form Name: Property Tour Request
Form Type: Contact Form
```

### 2.3 Add Fields (in this order)

**Field 1: Full Name**
```
Field Type: Text Input
Label: Full Name
Placeholder: John Smith
Required: YES
Field Name: full_name
```

**Field 2: Email**
```
Field Type: Email
Label: Email
Placeholder: john@example.com
Required: YES
Field Name: email
```

**Field 3: Phone**
```
Field Type: Phone
Label: Phone
Placeholder: (555) 123-4567
Required: YES
Field Name: phone
```

**Field 4: Move-In Date**
```
Field Type: Dropdown Select
Label: Expected Move-In Date
Required: YES
Field Name: move_in_date

Options:
- Within 30 days
- 1-2 months
- 2-3 months
- 3+ months
```

### 2.4 Form Behavior Settings

**On Submit:**
```
Action: Redirect to URL
URL: https://tour.paleceroliving.com/confirmation.html
```

**Email Notifications:**
```
✓ Send confirmation email to submitter
✓ Send notification to: [your-email@example.com]
```

### 2.5 Get Embed Code

```
Click "Embed" button at top
Select "Embed Code"
Copy the code (looks like <script>...</script>)
```

### 2.6 Replace Form in Landing Page

**Open:** `index.html`

**Find this section** (around line 350):
```html
<!-- PLACEHOLDER FORM - REPLACE WITH GHL EMBED -->
<div class="form-container">
    ... existing form code ...
</div>
```

**Replace with:**
```html
<div class="form-container">
    [PASTE YOUR GHL EMBED CODE HERE]
</div>
```

✅ **Done!** Your form now submits to GHL and creates contacts automatically.

---

## STEP 3: Create Property Tours Calendar (10 minutes)

### 3.1 Navigate to Calendars
```
Left Sidebar → Calendars → New Calendar
```

### 3.2 Basic Information
```
Calendar Name: Property Tours
Service Name: Villa Tour
Description: In-person tour of The Villas at Palecero
Color: Green (matches brand)
```

### 3.3 Availability Settings

**Duration:**
```
Meeting Duration: 30 minutes
```

**Buffer Times:**
```
Before Meeting: 15 minutes
After Meeting: 15 minutes
(This prevents tours from being scheduled back-to-back)
```

**Availability Hours:**
```
Monday:    9:00 AM - 5:00 PM
Tuesday:   9:00 AM - 5:00 PM
Wednesday: 9:00 AM - 5:00 PM
Thursday:  9:00 AM - 5:00 PM
Friday:    9:00 AM - 5:00 PM
Saturday:  10:00 AM - 3:00 PM (optional)
Sunday:    Closed
```

### 3.4 Team Settings

**Calendar Type:**
```
Select: "Round Robin" 
(This distributes tours evenly between team members)

Alternative: "Collective"
(This shows combined availability of all team members)
```

**Add Team Members:**
```
✓ Add yourself
✓ Add property manager email

Set availability for each:
- Your hours
- Property manager's hours
```

### 3.5 Location Settings
```
Location Type: In-Person
Address: 339-B Aquino Ave, Tontitown, AR 72762

Additional Instructions:
"Meet at the clubhouse entrance. We'll provide a golf cart tour of the property and show you available units."
```

### 3.6 Notifications

**Email Notifications:**
```
✓ Send confirmation email to guest
✓ Send booking notification to team members
✓ Send reminder 24 hours before (to guest)
✓ Send reminder 1 hour before (to guest)
```

**SMS Notifications:**
```
✓ Send SMS confirmation to guest
✓ Send SMS reminder 24 hours before
```

### 3.7 Booking Questions (Optional but Recommended)

Add these questions when someone books:
```
1. How many bedrooms are you looking for?
   - 1 Bedroom
   - 2 Bedrooms
   - Flexible

2. Do you have pets?
   - Yes
   - No

3. Are you relocating for work?
   - Yes - Corporate relocation
   - Yes - University position
   - No
```

### 3.8 Get Calendar Link

```
Click "Share" or "Get Link" button
Copy the booking link (looks like: https://your-ghl-domain.com/widget/bookings/calendar-id)
```

### 3.9 Replace Calendar Link

**Where to use this link:**

**Option A: Embed on Confirmation Page**
Open `confirmation.html`, find:
```html
<button class="btn btn-primary" onclick="addToGoogleCalendar()">
```

Replace the calendar functions with:
```html
<a href="YOUR-GHL-CALENDAR-LINK" class="btn btn-primary" target="_blank">
    Schedule Your Tour Time
</a>
```

**Option B: Redirect After Form Submission**
In GHL form settings (Step 2.4), change redirect URL to:
```
YOUR-GHL-CALENDAR-LINK
```
(User goes directly to calendar after submitting form)

✅ **Done!** Tours now book directly into your calendar.

---

## STEP 4: Set Up Automated Workflows (Optional but Recommended)

### 4.1 Create "New Tour Booking" Workflow
```
Left Sidebar → Automations → Workflows → Create Workflow
```

**Trigger:**
```
Calendar Event Booked → Property Tours
```

**Actions:**
```
1. Send SMS to Contact (Immediate)
   "Thanks for booking your tour at The Villas at Palecero! We'll see you at [Event Time]. Reply STOP to cancel."

2. Wait 24 hours

3. Send SMS Reminder
   "Reminder: Your tour at The Villas at Palecero is tomorrow at [Event Time]. See you soon!"

4. Wait until 1 hour after scheduled time

5. If/Else Condition: Did they show up?
   - If YES → Send follow-up SMS: "Thanks for visiting! Ready to apply? [Application Link]"
   - If NO → Send SMS: "We missed you today! Want to reschedule? [Calendar Link]"
```

### 4.2 Create "Form Submission" Workflow
```
Trigger: Form Submitted → Property Tour Request
```

**Actions:**
```
1. Create/Update Contact (Immediate)
2. Add Tag: "Tour-Requested"
3. Send Email: Tour confirmation
4. Wait 48 hours
5. If/Else: Did they book a time?
   - If NO → Send SMS: "Still interested? Book your tour: [Calendar Link]"
   - If YES → Do nothing
```

✅ **Done!** Now your follow-ups are automated.

---

## STEP 5: Testing Checklist

### 5.1 Test Form Submission
- [ ] Go to landing page
- [ ] Fill out form completely
- [ ] Submit form
- [ ] Verify contact created in GHL
- [ ] Check if confirmation email sent
- [ ] Verify redirect to confirmation page

### 5.2 Test Calendar Booking
- [ ] Click calendar link
- [ ] Select a time slot
- [ ] Fill in booking details
- [ ] Confirm booking
- [ ] Verify event appears in GHL calendar
- [ ] Check both you and property manager received notification
- [ ] Verify guest received confirmation email/SMS

### 5.3 Test Full Funnel
- [ ] Complete form as if you're a real customer
- [ ] Book a tour time
- [ ] Wait for automated messages (test in sandbox mode)
- [ ] Verify all notifications fired correctly

---

## STEP 6: Team Training

### For Property Manager:

**Daily Tasks:**
```
1. Check GHL Dashboard every morning
2. Review today's scheduled tours
3. Prepare units that will be shown
4. After each tour, mark if they showed up (for workflow tracking)
5. Add notes about what units they were interested in
```

**GHL Access:**
```
Email: [property-manager-email]
Role: Calendar Manager + Contact Viewer
Permissions: View contacts, manage calendar, cannot delete
```

---

## TROUBLESHOOTING

### Form Not Submitting
**Check:**
- Is GHL embed code correctly pasted?
- Are all required fields marked as required?
- Is redirect URL correct (https://tour.paleceroliving.com/confirmation.html)?

### Calendar Not Showing Availability
**Check:**
- Are team member hours set correctly?
- Is there enough buffer time between appointments?
- Are there any date overrides or time-off settings blocking availability?

### Notifications Not Sending
**Check:**
- Are email/SMS notifications enabled in calendar settings?
- Is the guest's email/phone captured correctly?
- Check GHL email deliverability settings
- Verify SMS credits are available

### Property Manager Not Receiving Notifications
**Check:**
- Is their email correct in team settings?
- Are they added to the calendar team?
- Check their notification preferences

---

## SUPPORT & RESOURCES

**GoHighLevel Support:**
- Help Docs: help.gohighlevel.com
- Community: community.gohighlevel.com
- Support: support@gohighlevel.com

**Questions about this setup:**
- Review this guide
- Check GHL documentation
- Test in sandbox mode first

---

## QUICK REFERENCE: Where Things Are

```
Forms:           Sites → Forms
Calendars:       Calendars → All Calendars
Contacts:        Contacts → All Contacts
Workflows:       Automations → Workflows
Team Settings:   Settings → Team Management
Notifications:   Settings → Email Services / SMS
```

---

**Setup Time Estimate:**
- Sub-Account: 2 minutes
- Form Creation: 5 minutes
- Calendar Setup: 10 minutes
- Workflow Setup: 10 minutes (optional)
- Testing: 5 minutes

**Total: ~15-30 minutes depending on workflows**

---

✅ Once complete, your landing page will automatically:
1. Capture leads in GHL
2. Allow instant tour booking
3. Send automated confirmations and reminders
4. Track all interactions in one system

Good luck!
