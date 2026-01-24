export interface BlogPostData {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  category: string;
  author: string;
  readTime: string;
  image: string;
}

export const blogPosts: BlogPostData[] = [
  {
    id: 1,
    slug: 'amendments-in-laws-budget-2082-nepal',
    title: 'Amendments in Laws as per Budget 2082 of Nepal',
    excerpt: 'A comprehensive overview of the key legislative changes introduced in the Budget 2082, including amendments to tax laws, business regulations, and compliance requirements.',
    content: `
## Introduction

The Budget for Fiscal Year 2082/83 (2025/26) has introduced several significant amendments to existing laws in Nepal. These changes impact businesses, individuals, and the overall economic landscape. This article provides a detailed analysis of the key amendments and their implications.

## Key Tax Amendments

### Income Tax Act Amendments

The Income Tax Act has seen several notable changes:

**1. Personal Income Tax Rates**

The government has revised the personal income tax slabs to provide relief to middle-income earners:

- Income up to NPR 5,00,000: 1% (Social Security Tax)
- NPR 5,00,000 to NPR 7,00,000: 10%
- NPR 7,00,000 to NPR 10,00,000: 20%
- NPR 10,00,000 to NPR 20,00,000: 30%
- Above NPR 20,00,000: 36%

**2. Corporate Tax Changes**

- Standard corporate tax rate remains at 25%
- Special industries continue to enjoy a reduced rate of 20%
- Banks and financial institutions taxed at 30%
- New provisions for technology companies with reduced rates

**3. Capital Gains Tax**

Capital gains on disposal of shares and securities:
- Listed companies: 5% on gains
- Unlisted companies: 10% on gains
- Real estate transactions: 5% (increased from previous rates)

### Value Added Tax (VAT) Amendments

**Key VAT Changes:**

1. **Threshold Changes**: The VAT registration threshold has been revised. Businesses with annual turnover exceeding NPR 50 lakhs must now register for VAT.

2. **New Exemptions**: Certain essential goods and services have been added to the exemption list including:
   - Basic healthcare services
   - Educational materials
   - Agricultural inputs

3. **E-billing Requirements**: Mandatory electronic billing for all VAT-registered businesses in urban areas.

## Business Regulation Changes

### Company Act Amendments

**1. Simplified Registration**

- Online company registration process streamlined
- Reduced timeline for company incorporation (7 days to 3 days)
- Single-window service for all registrations

**2. Share Capital Requirements**

- Minimum paid-up capital requirements revised
- Private limited companies: NPR 1,00,000 minimum
- Public limited companies: NPR 1,00,00,000 minimum

**3. Corporate Governance**

- Enhanced disclosure requirements for public companies
- Mandatory audit committee for companies with turnover above NPR 10 crores
- Independent director requirements strengthened

### Labour Law Amendments

Key changes to employment regulations:
- Minimum wage revision
- Enhanced social security contributions
- New provisions for remote work arrangements
- Strengthened worker protection measures

## Compliance Deadlines

| Compliance | Previous Deadline | New Deadline |
|------------|-------------------|--------------|
| Income Tax Return | Poush end | Magh end |
| VAT Return | 25th of following month | Same |
| TDS Deposit | 25th of following month | 15th of following month |
| Annual Audit | Within 6 months | Within 4 months |

## Impact on Businesses

### Small and Medium Enterprises (SMEs)

The budget amendments provide several benefits for SMEs:
- Tax holiday extended for new manufacturing units
- Simplified compliance procedures
- Access to concessional financing

### Large Corporations

Larger entities face:
- Enhanced reporting requirements
- Stricter transfer pricing regulations
- Increased compliance costs

## Recommendations

1. **Review Your Tax Position**: Businesses should reassess their tax planning strategies in light of the new rates and provisions.

2. **Update Compliance Systems**: Ensure your accounting and compliance systems are updated to meet new deadlines.

3. **Seek Professional Advice**: Given the complexity of changes, consulting with a tax professional is recommended.

4. **Employee Communication**: Inform employees about changes affecting their tax liability.

## Conclusion

The Budget 2082 amendments represent significant changes to Nepal's fiscal landscape. Businesses and individuals must stay informed and adapt their strategies accordingly. Our team at D. Utsav & Associates is ready to help you navigate these changes and ensure full compliance.

*For personalized advice on how these amendments affect your specific situation, please contact our team.*
    `,
    date: 'January 15, 2026',
    category: 'Tax Advisory',
    author: 'D. Utsav',
    readTime: '12 min read',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&auto=format&fit=crop&q=60',
  },
  {
    id: 2,
    slug: 'summary-of-nfrs-is36',
    title: 'Summary of NFRS - IAS 36: Impairment of Assets',
    excerpt: 'A detailed guide to understanding IAS 36 under Nepal Financial Reporting Standards, covering asset impairment testing, recognition, and measurement requirements.',
    content: `
## Introduction to IAS 36

IAS 36 "Impairment of Assets" is a crucial accounting standard under Nepal Financial Reporting Standards (NFRS) that ensures assets are carried at no more than their recoverable amount. This standard prescribes procedures for identifying impaired assets and the recognition of impairment losses.

## Objective of IAS 36

The primary objective of this standard is to:
- Ensure that an entity's assets are not carried at more than their recoverable amount
- Define how recoverable amount is determined
- Specify when an entity should reverse an impairment loss
- Prescribe required disclosures

## Scope of the Standard

IAS 36 applies to all assets except:
- Inventories (covered by IAS 2)
- Assets arising from construction contracts (IAS 11)
- Deferred tax assets (IAS 12)
- Assets from employee benefits (IAS 19)
- Financial assets within scope of NFRS 9
- Investment property measured at fair value (IAS 40)
- Biological assets measured at fair value less costs to sell (IAS 41)

## Key Definitions

### Recoverable Amount
The higher of an asset's:
- **Fair value less costs of disposal**: The price that would be received to sell an asset in an orderly transaction between market participants, less the costs of disposal
- **Value in use**: The present value of future cash flows expected to be derived from the asset

### Impairment Loss
The amount by which the carrying amount of an asset exceeds its recoverable amount.

### Carrying Amount
The amount at which an asset is recognized in the balance sheet after deducting accumulated depreciation and accumulated impairment losses.

### Cash-Generating Unit (CGU)
The smallest identifiable group of assets that generates cash inflows that are largely independent of the cash inflows from other assets or groups of assets.

## Identifying Assets That May Be Impaired

### External Indicators
- Significant decline in market value
- Adverse changes in technology, markets, economy, or laws
- Increase in market interest rates affecting discount rates
- Carrying amount of net assets exceeds market capitalization

### Internal Indicators
- Evidence of obsolescence or physical damage
- Significant adverse changes in use or expected use
- Evidence that economic performance is worse than expected
- For investments in subsidiaries, joint ventures, or associates: carrying amount exceeds carrying amount of investee's net assets

## Measuring Recoverable Amount

### Fair Value Less Costs of Disposal

The best evidence is a price in a binding sale agreement. In absence of such agreement:
- Market price in an active market
- Best information available about the amount obtainable

Costs of disposal include:
- Legal costs
- Stamp duty and similar transaction taxes
- Costs of removing the asset
- Direct incremental costs to bring asset to condition for sale

### Value in Use

Calculating value in use involves:

**1. Estimating Future Cash Flows**
- Based on reasonable and supportable assumptions
- Most recent budgets/forecasts (maximum 5 years)
- Extrapolated using steady or declining growth rate for subsequent years
- Cash flows in their current condition (exclude future restructuring or enhancements)

**2. Discount Rate**
- Pre-tax rate reflecting current market assessment of time value of money
- Risks specific to the asset for which cash flow estimates have not been adjusted
- Typically weighted average cost of capital (WACC)

## Cash-Generating Units (CGUs)

When recoverable amount cannot be determined for individual assets, it should be determined for the CGU to which the asset belongs.

### Identifying CGUs
- Consistent from period to period unless change is justified
- Consider how management monitors operations
- Consider how decisions are made about continuing or disposing of assets

### Allocation of Goodwill
- Goodwill acquired in a business combination is allocated to each CGU expected to benefit from synergies
- Level of allocation should not be larger than an operating segment before aggregation

## Recognition of Impairment Loss

An impairment loss should be recognized when carrying amount exceeds recoverable amount:

**For Individual Assets:**
- Reduce carrying amount to recoverable amount
- Recognize loss in profit or loss (unless asset carried at revalued amount under IAS 16)

**For CGUs:**
- First, reduce goodwill allocated to the CGU
- Then, reduce other assets of the CGU pro rata based on carrying amount
- But not below the highest of: fair value less costs of disposal, value in use, or zero

## Reversal of Impairment Loss

### Conditions for Reversal
- Indication that impairment loss may no longer exist or has decreased
- Change in estimates used to determine recoverable amount

### Limitations
- Carrying amount after reversal should not exceed what it would have been (net of depreciation) had no impairment been recognized
- **Reversal of impairment loss for goodwill is prohibited**

## Disclosure Requirements

Entities must disclose:

**For Each Class of Assets:**
- Amount of impairment losses recognized in profit or loss
- Line item(s) in which losses are included
- Amount of reversals recognized
- Impairment losses on revalued assets recognized in other comprehensive income

**For Material Individual Assets or CGUs:**
- Events and circumstances leading to impairment
- Amount of impairment loss recognized or reversed
- Nature of asset or description of CGU
- Whether recoverable amount is fair value less costs of disposal or value in use
- Basis for determining fair value less costs of disposal
- Discount rate used for value in use

## Practical Application in Nepal

### Common Scenarios Requiring Impairment Testing

1. **Property, Plant and Equipment**: Manufacturing companies with obsolete machinery
2. **Goodwill**: Post-acquisition assessment of acquired businesses
3. **Intangible Assets**: Software and technology assets with limited market demand
4. **Investments**: Subsidiaries or associates with declining performance

### Challenges in Implementation

- Difficulty in determining fair value in inactive markets
- Complexity in identifying CGUs
- Estimating future cash flows in uncertain economic conditions
- Determining appropriate discount rates

## Conclusion

IAS 36 is essential for presenting a true and fair view of an entity's financial position. Proper impairment testing ensures that assets reflect their economic reality. Given the complexities involved, professional judgment and expertise are crucial in applying this standard correctly.

*Need assistance with impairment testing or NFRS compliance? Contact D. Utsav & Associates for expert guidance.*
    `,
    date: 'January 8, 2026',
    category: 'Accounting Standards',
    author: 'D. Utsav',
    readTime: '15 min read',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&auto=format&fit=crop&q=60',
  },
  {
    id: 3,
    slug: 'summary-of-labour-act-2074',
    title: 'Summary of Labour Act 2074 B.S. (2017)',
    excerpt: 'Complete guide to Nepal\'s Labour Act 2074, covering employment contracts, working conditions, wages, leave entitlements, and employer-employee rights and obligations.',
    content: `
## Introduction

The Labour Act 2074 (2017) is the primary legislation governing employment relationships in Nepal. It replaced the earlier Labour Act 2048 and brought significant reforms to align with international labour standards and modern workplace requirements. This comprehensive guide covers the key provisions of the Act.

## Objectives of the Labour Act

The Act aims to:
- Protect the rights and interests of workers
- Regulate employment relationships
- Ensure workplace safety and health
- Establish minimum working conditions
- Create mechanisms for dispute resolution
- Promote harmonious industrial relations

## Scope and Application

The Act applies to:
- All enterprises employing one or more workers
- All categories of workers including permanent, temporary, and contract workers
- Both formal and informal sector establishments

**Exceptions:**
- Nepal Army, Nepal Police, and Armed Police Force
- Civil servants governed by Civil Service Act
- Domestic workers (separate provisions apply)

## Employment Contracts

### Types of Employment

**1. Regular Employment**
- Permanent nature of work
- Entitled to full benefits
- Termination only for valid reasons

**2. Work-Based Employment**
- For specific work or project
- Ends upon completion of work
- Limited benefits during engagement

**3. Time-Bound Employment**
- Fixed-term contracts
- Maximum two years duration
- Converts to regular if continues beyond term

**4. Casual Employment**
- For work of irregular nature
- Maximum seven days continuous engagement
- Limited statutory benefits

### Contract Requirements

Employment contracts must specify:
- Job description and duties
- Remuneration and benefits
- Working hours
- Leave entitlements
- Place of work
- Duration (for fixed-term contracts)
- Termination conditions

## Working Hours and Overtime

### Standard Working Hours
- Maximum 8 hours per day
- Maximum 48 hours per week
- 30-minute break for every 5 hours of work

### Overtime Provisions
- Overtime only with worker's consent
- Maximum 4 hours overtime per day
- Maximum 24 hours overtime per week
- Overtime rate: 1.5 times regular wage

### Special Provisions
- Night work (6 PM to 6 AM): Additional 10% allowance
- Hazardous work: Reduced working hours
- Pregnant workers: No overtime or night work

## Wages and Remuneration

### Minimum Wage
- Government sets minimum wage periodically
- Current minimum: NPR 17,300 per month (as per latest revision)
- Dearness allowance added separately
- Cannot be reduced below minimum

### Wage Payment
- Monthly payment by 7th of following month
- Payment in legal tender or bank transfer
- Detailed pay slip required
- No unauthorized deductions

### Equal Remuneration
- Equal pay for equal work regardless of gender
- No discrimination in wages

## Leave Entitlements

### Annual Leave (Home Leave)
- 1 day for every 20 days worked
- Approximately 18 days per year
- Can accumulate up to 90 days
- Cash compensation for unused leave on termination

### Sick Leave
- 12 days per year
- Can accumulate up to 45 days
- 50% of salary for first 12 days if exhausted
- Medical certificate required for more than 3 consecutive days

### Mourning Leave
- 13 days for death of spouse, parent, or child
- Other family members: As per customs

### Public Holidays
- Minimum 13 paid public holidays per year
- If required to work: Double compensation

### Special Leave
- Study leave: As agreed with employer
- Special circumstances: Unpaid, with employer's consent

## Maternity and Paternity Benefits

### Maternity Leave
- 14 weeks total (98 days)
- Can take up to 2 weeks before expected delivery
- Full salary for 60 days
- Remaining at 50% salary or as agreed
- Job protection during and after leave

### Paternity Leave
- 15 days with full pay
- Within 60 days of child's birth

### Nursing Breaks
- 1 hour per day for nursing mothers
- Until child is 1 year old
- Counted as working time

## Workplace Safety and Health

### Employer Obligations
- Provide safe working environment
- Supply necessary safety equipment
- Conduct regular safety training
- Maintain first aid facilities
- Display safety instructions

### Worker Rights
- Refuse unsafe work without penalty
- Report safety concerns
- Access to safety information and training

### Hazardous Work
- Defined categories of hazardous work
- Additional safety requirements
- Reduced working hours
- Enhanced health checkups

## Social Security

### Social Security Fund
- Mandatory contribution for all workers
- Employer contribution: 20% of basic salary
- Employee contribution: 11% of basic salary
- Total: 31% of basic salary

### Benefits Covered
- Medical treatment
- Maternity benefits
- Accident benefits
- Disability benefits
- Dependent family benefits
- Old age protection

## Termination of Employment

### Grounds for Termination by Employer
1. Worker's misconduct
2. Inability to perform duties
3. Redundancy due to economic reasons
4. Continuous unauthorized absence
5. Completion of fixed-term contract

### Termination Procedure
- Written notice required
- Opportunity to respond for misconduct cases
- Reasons must be specified
- Proper documentation

### Notice Period
- Regular workers: 30 days notice or pay
- Other workers: As per contract or 15 days

### Severance Pay (Gratuity)
- After completing 1 year of service
- Rate: 8.33% of monthly salary per year of service
- Payable on termination or retirement

### Retirement Age
- 58 years (standard)
- Can be extended by mutual agreement

## Dispute Resolution

### Internal Grievance
- First step: Internal complaint mechanism
- Employer must establish grievance procedure
- Response within 7 days

### Labour Office
- Mediation services available
- Free for workers
- Decision within 30 days

### Labour Court
- Appeals from Labour Office
- Binding decisions
- Legal representation allowed

## Penalties and Enforcement

### Penalties for Employers
- Violation of minimum wage: Up to NPR 100,000
- Violation of working hours: Up to NPR 50,000
- Failure to maintain records: Up to NPR 25,000
- Workplace safety violations: Based on severity

### Labour Inspectorate
- Regular inspections
- Power to issue orders
- Can close unsafe workplaces

## Key Compliance Checklist for Employers

1. ☐ Written employment contracts for all workers
2. ☐ Minimum wage compliance
3. ☐ Working hours records maintained
4. ☐ Overtime compensation properly calculated
5. ☐ Leave records updated
6. ☐ Social security contributions deposited
7. ☐ Workplace safety measures in place
8. ☐ Grievance mechanism established
9. ☐ Anti-discrimination policies implemented
10. ☐ Required registers and records maintained

## Conclusion

The Labour Act 2074 provides comprehensive protection for workers while balancing employer interests. Compliance with this Act is not just a legal requirement but also essential for maintaining productive workplace relationships.

*For assistance with labour law compliance or employment-related matters, contact D. Utsav & Associates.*
    `,
    date: 'December 28, 2025',
    category: 'Legal Compliance',
    author: 'D. Utsav',
    readTime: '18 min read',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&auto=format&fit=crop&q=60',
  },
  {
    id: 4,
    slug: 'guide-to-tds-in-nepal',
    title: 'Complete Guide to TDS (Tax Deducted at Source) in Nepal',
    excerpt: 'Everything you need to know about TDS in Nepal including rates, applicability, compliance requirements, and common mistakes to avoid.',
    content: `
## Introduction to TDS

Tax Deducted at Source (TDS) is a mechanism under the Income Tax Act 2058 where the payer deducts tax at the time of making certain payments to the payee. The deducted amount is then deposited with the Inland Revenue Department (IRD) on behalf of the payee.

## Purpose of TDS

- Regular flow of tax revenue to the government
- Wider tax base through tracking of transactions
- Reduced burden on taxpayers at year-end
- Prevention of tax evasion

## Who Must Deduct TDS?

The following entities are required to deduct TDS:
- Government offices
- Corporate bodies
- Partnerships and firms
- Individuals with business income above threshold
- NGOs and INGOs
- Diplomatic missions
- Any entity making specified payments

## TDS Rates in Nepal

### Employment Income
| Income Slab | Rate |
|------------|------|
| Up to NPR 5,00,000 | 1% (Social Security Tax) |
| NPR 5,00,000 - 7,00,000 | 10% |
| NPR 7,00,000 - 10,00,000 | 20% |
| NPR 10,00,000 - 20,00,000 | 30% |
| Above NPR 20,00,000 | 36% |

### Other Payments

| Nature of Payment | Resident Rate | Non-Resident Rate |
|------------------|---------------|-------------------|
| Rent | 10% | 15% |
| Interest | 15% | 15% |
| Dividend | 5% | 5% |
| Royalty | 15% | 15% |
| Service Fee (Natural Person) | 15% | 15% |
| Service Fee (Entity) | 1.5% | 15% |
| Commission/Agency | 15% | 15% |
| Consultancy | 15% | 15% |
| Meeting Allowance | 15% | 15% |

### Special Rates
- Contractor payments: 1.5% (registered), 15% (unregistered)
- Vehicle hire: 2.5%
- Lottery/Prize: 25%
- Compensation: As applicable

## TDS Compliance Requirements

### Registration
- Obtain PAN (Permanent Account Number)
- Register for TDS with IRD
- Obtain TDS deduction authority

### Deduction
- Deduct TDS at the time of payment or credit, whichever is earlier
- Issue TDS certificate (Form 10Kha) to payee
- Maintain proper records

### Deposit
- Deposit TDS by 25th of the following month
- Use IRD challan for deposit
- Mention PAN of deductor and deductee

### Returns
- File monthly TDS return (Form 10Kha Namuna)
- File annual reconciliation
- Submit by due dates

## TDS Calculation Examples

### Example 1: Rent Payment
Payment to landlord (individual): NPR 100,000/month

TDS Calculation:
- TDS Rate: 10%
- TDS Amount: NPR 100,000 × 10% = NPR 10,000
- Net Payment: NPR 90,000

### Example 2: Professional Service Fee
Payment to consultant (entity): NPR 500,000

TDS Calculation:
- TDS Rate: 1.5%
- TDS Amount: NPR 500,000 × 1.5% = NPR 7,500
- Net Payment: NPR 492,500

### Example 3: Contractor Payment
Payment to registered contractor: NPR 1,000,000

TDS Calculation:
- TDS Rate: 1.5%
- TDS Amount: NPR 1,000,000 × 1.5% = NPR 15,000
- Net Payment: NPR 985,000

## TDS Exemptions and Lower Deduction

### Exempted Payments
- Payments to government entities
- Certain agricultural payments
- Payments below threshold limits

### Lower Deduction Certificate
- Taxpayer can apply for lower deduction
- Based on estimated tax liability
- Valid for specific financial year

## TDS Credit and Refund

### Claiming TDS Credit
- Collect TDS certificates from all deductors
- Verify TDS credit in IRD portal
- Claim credit in annual tax return

### Refund Process
- If TDS exceeds tax liability
- File refund claim with return
- Refund within 60 days of verification

## Common TDS Mistakes to Avoid

1. **Wrong Rate Application**
   - Using incorrect TDS rates
   - Not updating for rate changes

2. **Late Deposit**
   - Missing deposit deadlines
   - Results in penalties and interest

3. **Incorrect PAN**
   - Deducting with wrong PAN
   - Creates mismatch in records

4. **No TDS Certificate**
   - Failing to issue certificates
   - Affects payee's credit claim

5. **Non-Deduction**
   - Not deducting when required
   - Deductor becomes liable

## Penalties for Non-Compliance

| Default | Penalty |
|---------|---------|
| Non-deduction | 100% of TDS amount |
| Late deposit | 15% per annum interest |
| Late filing | NPR 100 per day up to NPR 25,000 |
| Wrong information | Up to NPR 50,000 |

## TDS Returns Filing

### Monthly Return
- Due by end of following month
- Details of all deductions
- PAN of deductees

### Annual Return
- Reconciliation of monthly returns
- Summary of TDS deducted and deposited
- Due within 3 months of year-end

## Best Practices

1. Maintain a TDS calendar for compliance dates
2. Verify PAN before making payments
3. Use accounting software for TDS tracking
4. Reconcile TDS regularly
5. Issue certificates promptly
6. Keep payment proofs
7. Review TDS credit statements

## Conclusion

TDS compliance is crucial for both deductors and deductees. Proper understanding and timely compliance help avoid penalties and ensure smooth tax administration.

*Need help with TDS compliance? Contact D. Utsav & Associates for expert assistance.*
    `,
    date: 'December 20, 2025',
    category: 'Tax Advisory',
    author: 'D. Utsav',
    readTime: '14 min read',
    image: 'https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=800&auto=format&fit=crop&q=60',
  },
  {
    id: 5,
    slug: 'annual-audit-checklist-for-businesses',
    title: 'Annual Audit Checklist for Businesses in Nepal',
    excerpt: 'A comprehensive checklist to help businesses prepare for their annual statutory audit, ensuring compliance and smooth audit process.',
    content: `
## Introduction

Annual audit is a statutory requirement for most businesses in Nepal. Proper preparation ensures a smooth audit process, timely completion, and compliance with regulatory requirements. This comprehensive checklist will help you prepare effectively.

## Pre-Audit Preparation

### 1. Financial Statements

**Balance Sheet Items:**
- [ ] Cash and bank reconciliations completed
- [ ] Fixed asset register updated and reconciled
- [ ] Inventory physically verified and valued
- [ ] Receivables aged and reviewed for collectability
- [ ] Payables confirmed and reconciled
- [ ] Loan confirmations obtained from banks
- [ ] Provisions reviewed and documented

**Profit & Loss Items:**
- [ ] Revenue recognition reviewed
- [ ] Cost of goods sold calculated correctly
- [ ] Expenses properly classified and supported
- [ ] Depreciation calculations verified
- [ ] Interest calculations checked
- [ ] Tax provisions computed

### 2. Books and Records

**Primary Books:**
- [ ] Cash book updated and balanced
- [ ] Bank book entries complete
- [ ] Purchase register finalized
- [ ] Sales register finalized
- [ ] Journal entries posted and approved

**Subsidiary Ledgers:**
- [ ] Debtors ledger reconciled with control account
- [ ] Creditors ledger reconciled with control account
- [ ] Fixed asset ledger agrees with register
- [ ] Inventory ledger matches physical count

### 3. Supporting Documents

**Bank Related:**
- [ ] Bank statements for all accounts (full year)
- [ ] Bank reconciliation statements (monthly)
- [ ] Bank confirmation letters
- [ ] Loan agreements and sanction letters
- [ ] Fixed deposit receipts and interest certificates

**Revenue Related:**
- [ ] Sales invoices file (chronologically arranged)
- [ ] VAT returns (monthly)
- [ ] Export documentation (if applicable)
- [ ] Contracts with major customers

**Expense Related:**
- [ ] Purchase invoices with goods received notes
- [ ] Expense vouchers with supporting bills
- [ ] Payment vouchers with receipts
- [ ] Payroll records and salary sheets
- [ ] Rent agreements and TDS certificates

### 4. Tax Compliance Documents

**Income Tax:**
- [ ] Previous year tax returns
- [ ] Advance tax payment challans
- [ ] TDS deposit challans (monthly)
- [ ] TDS certificates received from customers
- [ ] Tax audit report (if applicable)

**VAT:**
- [ ] VAT returns filed (all months)
- [ ] Input tax credit records
- [ ] VAT reconciliation statement
- [ ] Debit/Credit notes issued

**Other Taxes:**
- [ ] Professional tax receipts
- [ ] Property tax receipts
- [ ] Any other applicable taxes

## Statutory Compliance

### Company Act Requirements

- [ ] Board meeting minutes
- [ ] Shareholder meeting minutes
- [ ] Register of members updated
- [ ] Register of directors updated
- [ ] Share transfer records (if any)
- [ ] Related party transactions disclosure

### Nepal Rastra Bank (for Financial Institutions)

- [ ] NRB directives compliance report
- [ ] Capital adequacy calculations
- [ ] Single borrower limit compliance
- [ ] Loan classification and provisioning

### Other Regulatory

- [ ] Industry-specific licenses renewed
- [ ] Environmental clearances
- [ ] Labour law compliance documents
- [ ] Social security fund deposits

## Inventory Audit Preparation

### Before Physical Count

- [ ] Inventory count instructions prepared
- [ ] Count teams assigned
- [ ] Cutoff procedures documented
- [ ] Third-party inventory identified
- [ ] Obsolete items identified

### During Physical Count

- [ ] Count sheets numbered and controlled
- [ ] Test counts performed
- [ ] Auditor access facilitated
- [ ] Movement during count documented

### After Physical Count

- [ ] Count sheets summarized
- [ ] Variances investigated
- [ ] Valuation completed
- [ ] Provisions for slow-moving items calculated

## Fixed Assets Verification

### Physical Verification

- [ ] All assets tagged/identified
- [ ] Location of assets documented
- [ ] Condition of assets noted
- [ ] Missing assets investigated

### Documentation

- [ ] Purchase invoices for additions
- [ ] Sale documents for disposals
- [ ] Installation/commissioning reports
- [ ] Insurance policies in place

### Register Maintenance

- [ ] Asset register updated for additions
- [ ] Disposals recorded with profit/loss
- [ ] Depreciation calculated correctly
- [ ] Impairment review conducted

## Related Party Transactions

### Identification

- [ ] List of related parties prepared
- [ ] Directors' interest disclosed
- [ ] Key management personnel identified

### Transactions

- [ ] All transactions with related parties listed
- [ ] Arm's length basis documented
- [ ] Board approvals obtained
- [ ] Disclosure requirements met

## Subsequent Events

### Review Period

Review period from year-end to audit report date for:
- [ ] Significant business developments
- [ ] Legal matters
- [ ] Customer/supplier issues
- [ ] Major contracts signed/cancelled
- [ ] Financial developments

## Audit Facilitation

### Workspace

- [ ] Audit room arranged
- [ ] Computer access provided
- [ ] Printer/copier available
- [ ] Internet access available

### Personnel

- [ ] Key contacts identified
- [ ] Availability confirmed
- [ ] Queries response mechanism established

### Schedule

- [ ] Audit timeline agreed
- [ ] Key milestone dates set
- [ ] Document submission deadlines established

## Common Audit Issues to Address

1. **Bank Reconciliation Items**
   - Old outstanding cheques
   - Unidentified deposits
   - Bank errors

2. **Receivables**
   - Long outstanding amounts
   - Disputed balances
   - Related party balances

3. **Inventory**
   - Slow moving items
   - Valuation issues
   - Cutoff problems

4. **Payables**
   - Unrecorded liabilities
   - Accruals adequacy
   - Provisions completeness

5. **Compliance**
   - Pending returns
   - Outstanding dues
   - Documentation gaps

## Post-Audit Actions

- [ ] Review draft audit report
- [ ] Provide management representations
- [ ] Address audit observations
- [ ] File audited financials with authorities
- [ ] Publish annual report (if required)

## Conclusion

Proper preparation for an annual audit saves time, reduces disruption, and ensures a smooth process. Use this checklist to systematically prepare and address potential issues before the audit begins.

*Need help preparing for your audit? Contact D. Utsav & Associates for professional assistance.*
    `,
    date: 'December 15, 2025',
    category: 'Audit',
    author: 'D. Utsav',
    readTime: '16 min read',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=60',
  },
  {
    id: 6,
    slug: 'business-registration-process-nepal-2026',
    title: 'Complete Guide to Business Registration in Nepal 2026',
    excerpt: 'Step-by-step guide to registering your business in Nepal, including company formation, PAN/VAT registration, and obtaining necessary licenses.',
    content: `
## Introduction

Starting a business in Nepal involves several registration processes with different government authorities. This comprehensive guide walks you through the entire process from company formation to obtaining necessary licenses and permits.

## Types of Business Entities in Nepal

### 1. Sole Proprietorship
- Simplest form of business
- Owned by single individual
- No separate legal entity
- Unlimited personal liability

### 2. Partnership Firm
- Two or more partners
- Governed by Partnership Act 2020
- Shared liability among partners
- Relatively simple registration

### 3. Private Limited Company
- Separate legal entity
- Limited liability for shareholders
- Maximum 101 shareholders
- Cannot invite public subscription

### 4. Public Limited Company
- Can raise capital from public
- Minimum 7 shareholders
- Listed or unlisted on stock exchange
- Stricter compliance requirements

## Company Registration Process

### Step 1: Name Reservation

**Process:**
1. Access OCR (Office of Company Registrar) portal
2. Search for name availability
3. Submit preferred names (up to 3 choices)
4. Pay name reservation fee

**Requirements:**
- Unique name not similar to existing companies
- Name should reflect nature of business
- Cannot use restricted words without approval

**Timeline:** 1-2 working days

**Fee:** NPR 1,000

### Step 2: Prepare Incorporation Documents

**Memorandum of Association (MOA):**
- Name of company
- Registered office address
- Objectives of company
- Authorized capital
- Liability clause
- Subscription clause

**Articles of Association (AOA):**
- Rules for internal management
- Share capital and transfer provisions
- Board composition and meetings
- Dividend policy
- Accounts and audit

**Other Documents:**
- Form for company registration
- Details of directors and shareholders
- Citizenship certificates of promoters
- Consent letters from directors
- NOC from landlord for registered office

### Step 3: Submit Registration Application

**Online Submission:**
1. Create account on OCR portal
2. Fill company registration form
3. Upload required documents
4. Pay registration fees online

**Physical Submission:**
- Visit OCR office with documents
- Submit application
- Receive acknowledgment

### Step 4: Verification and Approval

**OCR Verification:**
- Document verification
- Compliance check
- Name approval confirmation

**Timeline:** 3-5 working days

### Step 5: Obtain Certificate of Incorporation

**Upon Approval:**
- Certificate of Incorporation issued
- Company Registration Number assigned
- Company officially exists

## Capital Requirements

| Company Type | Minimum Paid-up Capital |
|--------------|------------------------|
| Private Limited | NPR 1,00,000 |
| Public Limited | NPR 1,00,00,000 |
| Foreign Company | As per FDI policy |

## PAN Registration

### Process

**Online Application:**
1. Access IRD portal (ird.gov.np)
2. Fill PAN application form
3. Upload required documents
4. Submit application

**Required Documents:**
- Company registration certificate
- MOA and AOA
- Citizenship copies of directors
- Photograph of authorized person
- Registered office verification

**Timeline:** 1-2 working days

**Fee:** Free

### PAN Card Collection
- Visit IRD office with acknowledgment
- Verify details
- Collect PAN card

## VAT Registration

### Mandatory Registration
Required if:
- Annual turnover exceeds NPR 50 lakhs
- Engaged in import/export
- Wants to claim input tax credit

### Voluntary Registration
- Businesses below threshold can register voluntarily
- Benefits: Input tax credit, professional image

### VAT Registration Process

**Application:**
1. Submit application at IRD
2. Provide business details
3. Attach required documents

**Documents Required:**
- PAN certificate
- Company registration certificate
- Bank account details
- Business premises verification
- Projected turnover statement

**Verification:**
- Physical verification of business premises
- Stock and record verification
- Business genuineness check

**Timeline:** 7-15 working days

## Industry-Specific Licenses

### Department of Industry (DOI)

**When Required:**
- Manufacturing businesses
- Industries above certain investment threshold
- Specific sectors requiring industrial license

**Process:**
1. Apply at DOI online portal
2. Submit feasibility study
3. Environmental assessment (if required)
4. Technical evaluation
5. License issuance

### Tourism License

**For:**
- Hotels and resorts
- Travel agencies
- Trekking agencies
- Tourist transport

**Authority:** Department of Tourism

### Import/Export License

**For:** Businesses engaged in foreign trade

**Authority:** Department of Commerce

**Requirements:**
- Registration with Department of Commerce
- Bank guarantee (for specific goods)
- Membership of trade association

## Local Body Registration

### Local Level Registration
- Ward office registration
- Municipal business registration
- Annual renewal required

### Documents Required
- Company registration certificate
- PAN certificate
- Citizenship of proprietor/directors
- Rental agreement
- Photograph

### Fee
- Based on nature and scale of business
- Annual renewal fees applicable

## Professional Registrations

### Nepal Chartered Accountants Institute (ICAN)
- For audit firms

### Nepal Engineers Association
- For engineering firms

### Medical Council
- For healthcare businesses

## Bank Account Opening

### Requirements
- Company registration certificate
- MOA and AOA
- PAN certificate
- Board resolution for account opening
- Specimen signatures of authorized signatories
- KYC documents of directors

### Process
1. Visit bank with documents
2. Fill account opening form
3. Provide specimen signatures
4. Initial deposit
5. Receive account number

## Social Security Fund Registration

### Mandatory For
- All businesses with employees

### Process
1. Register at Social Security Fund
2. Enroll all employees
3. Start monthly contributions

### Contribution Rates
- Employer: 20% of basic salary
- Employee: 11% of basic salary

## Registration Checklist

### Essential Registrations
- [ ] Company Registration (OCR)
- [ ] PAN Registration (IRD)
- [ ] VAT Registration (if applicable)
- [ ] Local Business Registration
- [ ] Social Security Fund Registration

### Additional Registrations (as applicable)
- [ ] Industrial License (DOI)
- [ ] Import/Export License
- [ ] Tourism License
- [ ] Professional Registration
- [ ] Environmental Clearance

## Common Mistakes to Avoid

1. Incomplete documentation
2. Incorrect name reservation
3. Wrong business classification
4. Missing signatures
5. Address mismatch in documents
6. Skipping local registration
7. Not registering for social security

## Conclusion

Business registration in Nepal, while involving multiple steps, has become increasingly streamlined with online services. Proper planning and documentation ensure a smooth registration process.

*Need assistance with business registration? Contact D. Utsav & Associates for end-to-end support.*
    `,
    date: 'December 10, 2025',
    category: 'Business Registration',
    author: 'D. Utsav',
    readTime: '20 min read',
    image: '/bizreg.webp',
  },
];

export const getBlogBySlug = (slug: string): BlogPostData | undefined => {
  return blogPosts.find(post => post.slug === slug);
};

export const getBlogById = (id: number): BlogPostData | undefined => {
  return blogPosts.find(post => post.id === id);
};
