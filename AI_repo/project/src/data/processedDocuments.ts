import { Document } from '../utils/filterUtils';

// Raw data from the classification file
const rawData = [
  {
    "URL": "https://www.fda.gov/files/medical%20devices/published/US-FDA-Artificial-Intelligence-and-Machine-Learning-Discussion-Paper.pdf",
    "AI Applications": "['Public Health AI']",
    "Category": "Federal",
    "predicted_specialty": "unclassified",
    "Year": "",
    "Focus Areas": "Reliability and Performance, Transparency and Explainability, Safety and Risk Management",
    "State": ""
  },
  {
    "URL": "https://www.accessdata.fda.gov/cdrh_docs/pdf22/K221624.pdf",
    "AI Applications": [],
    "Category": "Federal",
    "predicted_specialty": "oncology, radiology, pathology",
    "Year": 2022,
    "Focus Areas": "Reliability and Performance, Transparency and Explainability, Ethics and Consent, Safety and Risk Management",
    "State": ""
  },
  {
    "URL": "https://www.accessdata.fda.gov/cdrh_docs/pdf19/K193271.pdf",
    "AI Applications": [],
    "Category": "Federal",
    "predicted_specialty": "radiology",
    "Year": 2020,
    "Focus Areas": "Reliability and Performance, Transparency and Explainability, Ethics and Consent, Safety and Risk Management",
    "State": ""
  },
  {
    "URL": "https://405d.hhs.gov/Documents/405d-post-volxxv-july-2024.pdf",
    "AI Applications": "['Operational and Administrative Automation', 'Research and Clinical Trial AI', 'Clinical Documentation AI']",
    "Category": "Federal",
    "predicted_specialty": "unclassified",
    "Year": "",
    "Focus Areas": "Privacy and Security, Ethics and Consent, Safety and Risk Management",
    "State": ""
  },
  {
    "URL": "https://aspe.hhs.gov/sites/default/files/documents/1348a9a067fd4d225981a822dfe25ea5/trustworthy-ai.pdf",
    "AI Applications": "['Clinical Documentation AI', 'Medical Imaging AI', 'Education and Training AI', 'Research and Clinical Trial AI', 'Public Health AI']",
    "Category": "Federal",
    "predicted_specialty": "unclassified",
    "Year": 2023,
    "Focus Areas": "Bias and Fairness, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.healthit.gov/sites/default/files/page/2020-02/GettingerModeratorSlidesAIPanelsforONCAnnualMeeting12720Final.pdf",
    "AI Applications": "['Patient-facing AI', 'Public Health AI', 'Clinical Documentation AI', 'Operational and Administrative Automation', 'Education and Training AI', 'Clinical Decision Support']",
    "Category": "Federal",
    "predicted_specialty": "unclassified",
    "Year": "",
    "Focus Areas": "Bias and Fairness, Privacy and Security, Transparency and Explainability",
    "State": ""
  },
  {
    "URL": "https://www.healthit.gov/sites/default/files/page/2021-02/ONC-LEAP-in-Health-IT-SEN-FY2021.pdf",
    "AI Applications": "['Research and Clinical Trial AI', 'Public Health AI']",
    "Category": "Federal",
    "predicted_specialty": "unclassified",
    "Year": 2021,
    "Focus Areas": "Bias and Fairness, Transparency and Explainability, Ethics and Consent",
    "State": ""
  },
  {
    "URL": "https://www.healthit.gov/sites/default/files/2022-01/ONC_AI_in_Health_IT_Showcase.pdf",
    "AI Applications": "['Public Health AI']",
    "Category": "Federal",
    "predicted_specialty": "dermatology",
    "Year": 2022,
    "Focus Areas": "Bias and Fairness, Privacy and Security, Transparency and Explainability, Ethics and Consent, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.healthit.gov/sites/default/files/facas/2024-04-11_John_Brownstein_Presentation_508.pdf",
    "AI Applications": [],
    "Category": "Federal",
    "predicted_specialty": "pediatrics",
    "Year": "",
    "Focus Areas": "Bias and Fairness, Privacy and Security, Safety and Risk Management",
    "State": ""
  },
  {
    "URL": "https://www.healthit.gov/sites/default/files/page/2024-11/HITAC_Annual_Report_for_FY24_508.pdf",
    "AI Applications": "['Public Health AI']",
    "Category": "Federal",
    "predicted_specialty": "unclassified",
    "Year": 2024,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://digirepo.nlm.nih.gov/master/borndig/9918734183106676/9918734183106676.pdf",
    "AI Applications": "['Public Health AI', 'Research and Clinical Trial AI', 'Patient-facing AI', 'Clinical Decision Support', 'Clinical Documentation AI', 'Medical Imaging AI', 'Operational and Administrative Automation', 'Education and Training AI']",
    "Category": "Federal",
    "predicted_specialty": "unclassified",
    "Year": 2003,
    "Focus Areas": "Bias and Fairness, Transparency and Explainability, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://dpcpsi.nih.gov/sites/default/files/2025-04/115PM-OSC-Concept-Clearance-PRIMED-AI-Chiang-Tromberg-508.pdf",
    "AI Applications": [],
    "Category": "Federal",
    "predicted_specialty": "radiology",
    "Year": 2025,
    "Focus Areas": "Reliability and Performance, Privacy and Security",
    "State": ""
  },
  {
    "URL": "https://commonfund.nih.gov/sites/default/files/PRIMED-AI/PRIMED-AI%20External-Input-Narrative-508.pdf",
    "AI Applications": [],
    "Category": "Federal",
    "predicted_specialty": "radiology",
    "Year": 2024,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://seed.nih.gov/sites/default/files/2023-09/NIA-SaMD-and-AI.pdf",
    "AI Applications": "['Patient-facing AI']",
    "Category": "Federal",
    "predicted_specialty": "cardiology",
    "Year": 2022,
    "Focus Areas": "Safety and Risk Management",
    "State": ""
  },
  {
    "URL": "https://seed.nih.gov/sites/default/files/2025-03/HHS_Topics_for_Budget_WaiversREV.pdf",
    "AI Applications": "['Medical Imaging AI', 'Research and Clinical Trial AI', 'Patient-facing AI']",
    "Category": "Federal",
    "predicted_specialty": "surgery, Obstetrics_Gynecology, oncology, radiology, cardiology, endocrinology, pulmonology, rheumatology, psychiatry, pediatrics, neurology, infectious_diseases",
    "Year": 2024,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://braininitiative.nih.gov/sites/default/files/documents/brain2025_508c_2.pdf",
    "AI Applications": [],
    "Category": "Federal",
    "predicted_specialty": "surgery, radiology, pathology, psychiatry, ophthalmology, otolaryngology, neurology",
    "Year": 2014,
    "Focus Areas": "Reliability and Performance, Safety Risk and Management, Privacy and Security, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.100-5.pdf",
    "AI Applications": [],
    "Category": "Federal",
    "predicted_specialty": "unclassified",
    "Year": 2024,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://nvlpubs.nist.gov/nistpubs/ir/2015/NIST.IR.8084.pdf",
    "AI Applications": [],
    "Category": "Federal",
    "predicted_specialty": "unclassified",
    "Year": 2015,
    "Focus Areas": "Bias and Fairness, Privacy and Security, Ethics and Consent",
    "State": ""
  },
  {
    "URL": "https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-206.pdf",
    "AI Applications": [],
    "Category": "Federal",
    "predicted_specialty": "unclassified",
    "Year": 2018,
    "Focus Areas": "Bias and Fairness, Privacy and Security, Ethics and Consent, Safety and Risk Management",
    "State": ""
  },
  {
    "URL": "https://nvlpubs.nist.gov/nistpubs/SpecialPublications/1500-18/NIST.SP.1500-18r2.pdf",
    "AI Applications": [],
    "Category": "Federal",
    "predicted_specialty": "unclassified",
    "Year": 2023,
    "Focus Areas": "Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.cms.gov/priorities/innovation/files/x/aichallenge-pubnotice_08_13_2020.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "unclassified",
    "Year": 2019,
    "Focus Areas": "Reliability and Performance, Transparency and Explainability",
    "State": ""
  },
  {
    "URL": "https://www.cms.gov/priorities/innovation/files/slides/ai-hoc-overview-webinar-slides.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "unclassified",
    "Year": "",
    "Focus Areas": "Reliability and Performance, Transparency and Explainability",
    "State": ""
  },
  {
    "URL": "https://www.cdc.gov/pcd/issues/2024/pdf/24_0245.pdf",
    "AI Applications": "['Public Health AI', 'Clinical Documentation AI', 'Education and Training AI', 'Medical Imaging AI', 'Operational and Administrative Automation', 'Patient-facing AI', 'Predictive Analytics', 'Research and Clinical Trial AI']",
    "Category": "Federal",
    "predicted_specialty": "unclassified",
    "Year": 2024,
    "Focus Areas": "Bias and Fairness, Privacy and Security, Transparency and Explainability, Ethics and Consent",
    "State": ""
  },
  {
    "URL": "https://www.cdc.gov/health-communication/media/pdfs/2024/10/AI-for-Good_Listen-Up_S2E5_Transcript.pdf",
    "AI Applications": [],
    "Category": "Federal",
    "predicted_specialty": "unclassified",
    "Year": "",
    "Focus Areas": "Bias and Fairness, Privacy and Security, Transparency and Explainability, Ethics and Consent",
    "State": ""
  },
  {
    "URL": "https://beta.cdc.gov/global-health/media/pdfs/GDHS_Strategy2022_REV_508.pdf",
    "AI Applications": [],
    "Category": "Federal",
    "predicted_specialty": "infectious_diseases",
    "Year": 2021,
    "Focus Areas": "Bias and Fairness, Privacy and Security, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.whitehouse.gov/wp-content/uploads/2024/03/M-24-10-Advancing-Governance-Innovation-and-Risk-Management-for-Agency-Use-of-Artificial-Intelligence.pdf",
    "AI Applications": [],
    "Category": "Federal",
    "predicted_specialty": "unclassified",
    "Year": 2020,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.whitehouse.gov/wp-content/uploads/2023/11/AI-in-Government-Memo-draft-for-public-review.pdf",
    "AI Applications": [],
    "Category": "Federal",
    "predicted_specialty": "unclassified",
    "Year": 2023,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.aim-ahead.net/media/hd3fws1l/dstc-resources-pptx.pdf",
    "AI Applications": "['Education and Training AI']",
    "Category": "Academic Institution",
    "predicted_specialty": "unclassified",
    "Year": 2022,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Transparency and Explanability, Ethics and Consent",
    "State": ""
  },
  {
    "URL": "https://www.aim-ahead.net/media/3cvd4x4g/pair-cohort-2-informational-webinar-shared.pdf",
    "AI Applications": [],
    "Category": "Professional Medical Organization",
    "predicted_specialty": "unclassified",
    "Year": 2024,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Transparency and Explanability, Ethics and Consent",
    "State": ""
  },
  {
    "URL": "https://www.aim-ahead.net/media/5q3hmb5b/webinar-4-slide-presentation.pdf",
    "AI Applications": [],
    "Category": "Professional Medical Organization",
    "predicted_specialty": "unclassified",
    "Year": 2024,
    "Focus Areas": "Reliability and Performance, Privacy and Security, Transparency and Explainability",
    "State": ""
  },
  {
    "URL": "https://aitaskforce.alabama.gov/wp-content/uploads/2025/03/GenAI-TaskForce-Report_Final_20250321-002.pdf",
    "AI Applications": "['Education and Training AI', 'Public Health AI', 'Operational and Administrative Automation', 'Clinical Documentation AI']",
    "Category": "State",
    "predicted_specialty": "unclassified",
    "Year": 2024,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": "Alabama"
  },
  {
    "URL": "https://medicaid.alabama.gov/documents/7.0_Providers/7.6_Manuals/7.8_PES_Manual_2-12-25.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "surgery, Obstetrics_Gynecology, cardiology, nephrology, psychiatry",
    "Year": 2025,
    "Focus Areas": "Reliability and Performance, Privacy and Security",
    "State": "Alabama"
  },
  {
    "URL": "https://agi.alabama.gov/hemp/wp-content/uploads/sites/11/2022/03/Medical-Cannabis-Act-2021-450.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "unclassified",
    "Year": 1975,
    "Focus Areas": "Privacy and Security, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": "Alabama"
  },
  {
    "URL": "https://doc.alabama.gov/docs/AdminRegs/AR410.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "unclassified",
    "Year": 2024,
    "Focus Areas": "Privacy and Security, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": "Alabama"
  },
  {
    "URL": "https://oag.ca.gov/system/files/attachments/press-docs/Legal%20Advisory%20-%20Application%20of%20Existing%20CA%20Laws%20to%20Artificial%20Intelligence.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "unclassified",
    "Year": 2024,
    "Focus Areas": "Bias and Fairness, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": "California"
  },
  {
    "URL": "https://www.insurance.ca.gov/0250-insurers/0500-legal-info/0200-regulations/HealthGuidance/upload/SB-1120-1-Guidance-Use-of-Artificial-Intelligence-Algorithms-and-Other-Software-Tools-in-Utilization-Management.pdf",
    "AI Applications": "['Clinical Decision Support']",
    "Category": "State",
    "predicted_specialty": "unclassified",
    "Year": 2024,
    "Focus Areas": "Bias and Fairness, Privacy and Security, Ethics and Consent, Safety and Risk Management",
    "State": "California"
  },
  {
    "URL": "https://oag.ca.gov/system/files/attachments/press-docs/FINAL-%20Letter%20to%20Secretary%20Xavier%20Becerra%20and%20Dr.%20Tripathi%206-20-2023.pdf",
    "AI Applications": "['Clinical Decision Support', 'Clinical Documentation AI', 'Operational and Administrative Automation', 'Education and Training AI', 'Public Health AI', 'Patient-facing AI']",
    "Category": "State",
    "predicted_specialty": "unclassified",
    "Year": 2023,
    "Focus Areas": "Bias and Fairness, Transparency and Explainability",
    "State": "California"
  },
  {
    "URL": "https://apcp.assembly.ca.gov/system/files/2025-04/ab-489-bonta-apcp-analysis_0.pdf",
    "AI Applications": "['Patient-facing AI']",
    "Category": "State",
    "predicted_specialty": "psychiatry",
    "Year": 2025,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": "California"
  },
  {
    "URL": "https://apcp.assembly.ca.gov/system/files/2024-04/ab-3030-calderon-apcp-analysis.pdf",
    "AI Applications": "['Education and Training AI']",
    "Category": "State",
    "predicted_specialty": "unclassified",
    "Year": 2024,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": "California"
  },
  {
    "URL": "https://sjud.senate.ca.gov/system/files/2025-04/sb-503-weber-pierson-sjud-analysis.pdf",
    "AI Applications": "['Clinical Decision Support']",
    "Category": "State",
    "predicted_specialty": "unclassified",
    "Year": 2025,
    "Focus Areas": "Bias and Fairness, Governance Committees",
    "State": "California"
  },
  {
    "URL": "https://apcp.assembly.ca.gov/system/files/2025-05/background-paper-genai-in-health-care-joint-asm-health-privacy-hearing-5.28.pdf",
    "AI Applications": "['Clinical Documentation AI', 'Operational and Administrative Automation', 'Patient-facing AI', 'Education and Training AI', 'Research and Clinical Trial AI', 'Public Health AI', 'Medical Imaging AI', 'Robotics and Surgical AI', 'Clinical Decision Support', 'Predictive Analytics']",
    "Category": "State",
    "predicted_specialty": "psychiatry, neurology",
    "Year": 2025,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": "California"
  },
  {
    "URL": "https://portal.ct.gov/-/media/sde/board/position_statement_cell_phone_use.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "psychiatry",
    "Year": 2023,
    "Focus Areas": "Privacy and Security, Ethics and Consent, Safety and Risk Management",
    "State": "Connecticut"
  },
  {
    "URL": "https://dhss.delaware.gov/wp-content/uploads/sites/10/dph/pdf/dphacc2007.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "pediatrics, oncology, infectious_diseases",
    "Year": 2007,
    "Focus Areas": "Privacy and Security, Safety and Risk Management",
    "State": "Delaware"
  },
  {
    "URL": "https://dhr.delaware.gov/benefits/sebc/documents/sub-comm-2020/0109-cerner-presentation.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "unclassified",
    "Year": 2018,
    "Focus Areas": "Reliability and Performance",
    "State": "Delaware"
  },
  {
    "URL": "https://dhss.delaware.gov/wp-content/uploads/sites/10/dph/pdf/demsocreport2017.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "unclassified",
    "Year": 2017,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": "Delaware"
  },
  {
    "URL": "https://dhss.delaware.gov/wp-content/uploads/sites/10/dph/pdf/dphacc2008.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "oncology",
    "Year": 2009,
    "Focus Areas": "Privacy and Security, Safety and Risk Management",
    "State": "Delaware"
  },
  {
    "URL": "https://dvcc.delaware.gov/wp-content/uploads/sites/87/2021/03/2021_DVCC_DV_Manual_for_HCPs_FINAL_03.09.2021.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "Obstetrics_Gynecology, psychiatry, neurology",
    "Year": 2021,
    "Focus Areas": "Privacy and Security, Ethics and Consent, Safety and Risk Management",
    "State": "Delaware"
  },
  {
    "URL": "https://ahca.myflorida.com/content/download/22410/file/FL_2021-2022_EQR-TR_Report.pdf",
    "AI Applications": [],
    "Category": "Academic Institution",
    "predicted_specialty": "Obstetrics_Gynecology, oncology, endocrinology, pulmonology, psychiatry, pediatrics, infectious_diseases",
    "Year": 2022,
    "Focus Areas": "Reliability and Performance, Privacy and Security, Safety and Risk Management",
    "State": "Florida"
  },
  {
    "URL": "https://ahca.myflorida.com/content/download/7238/file/Ambulatory_Surgical_Center_ST_M.pdf",
    "AI Applications": [],
    "Category": "Professional Medical Organization",
    "predicted_specialty": "surgery, pediatrics",
    "Year": 2024,
    "Focus Areas": "Privacy and Security, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": "Florida"
  },
  {
    "URL": "https://ahca.myflorida.com/content/download/24675/file/MED180%20D50%20MMA%20Summative%20Report%20FINAL.pdf",
    "AI Applications": [],
    "Category": "Professional Medical Organization",
    "predicted_specialty": "Obstetrics_Gynecology, oncology, endocrinology, psychiatry",
    "Year": 2014,
    "Focus Areas": "Reliability and Performance, Privacy and Security, Safety and Risk Management",
    "State": "Florida"
  },
  {
    "URL": "https://ahca.myflorida.com/Medicaid/pdffiles/provider_alerts/2020_03/Medicaid_Telemedicine_Guidance_20200318.pdf",
    "AI Applications": [],
    "Category": "Professional Medical Organization",
    "predicted_specialty": "unclassified",
    "Year": 2020,
    "Focus Areas": "Reliability and Performance, Privacy and Security, Ethics and Consent, Safety and Risk Management",
    "State": "Florida"
  },
  {
    "URL": "https://ahca.myflorida.com/content/download/10499/file/SCHIP_MeetingPacket061621.pdf",
    "AI Applications": [],
    "Category": "Professional Medical Organization",
    "predicted_specialty": "unclassified",
    "Year": 2021,
    "Focus Areas": "Reliability and Performance, Privacy and Security, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": "Florida"
  },
  {
    "URL": "https://ahca.myflorida.com/content/download/25735/file/2023-24%20Annual%20Fraud%20and%20Abuse%20Final%2001%2017%202025.pdf",
    "AI Applications": [],
    "Category": "Professional Medical Organization",
    "predicted_specialty": "psychiatry",
    "Year": 2023,
    "Focus Areas": "Reliability and Performance, Privacy and Security, Safety and Risk Management, Governance Committees",
    "State": "Florida"
  },
  {
    "URL": "https://ahca.myflorida.com/content/download/24421/file/The%20Joseph%20L.%20Morse%20Health%20Center,%20Inc.%20-%20Redacted.pdf",
    "AI Applications": [],
    "Category": "Professional Medical Organization",
    "predicted_specialty": "neurology",
    "Year": 2024,
    "Focus Areas": "Privacy and Security, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": "Florida"
  },
  {
    "URL": "https://ahca.myflorida.com/content/download/20154/file/Florida_Woman_Care_and_Lucina_Analytics-Medicaid_RFI_014-2122_Response.pdf",
    "AI Applications": [],
    "Category": "Professional Medical Organization",
    "predicted_specialty": "unclassified",
    "Year": 2022,
    "Focus Areas": "Bias and Fairness, Reliability and Performance",
    "State": "Florida"
  },
  {
    "URL": "https://dch.georgia.gov/sites/dch.georgia.gov/files/PHCP-InitialLicensurePacket-3-21-16.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "unclassified",
    "Year": 2008,
    "Focus Areas": "Privacy and Security, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": "Georgia"
  },
  {
    "URL": "https://www.mmis.georgia.gov/portal/Portals/0/StaticContent/Public/ALL/NOTICES/New%20Biller-Web%20Portal%20Navigation%202023%20Webinar%20PresentationFINALFINAL%2020230112173143.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "unclassified",
    "Year": "",
    "Focus Areas": "Reliability and Performance, Privacy and Security, Safety and Risk Management",
    "State": "Georgia"
  },
  {
    "URL": "https://dch.georgia.gov/sites/dch.georgia.gov/files/ADC-InitialLicensurePacket-1-15-15_0.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "unclassified",
    "Year": "",
    "Focus Areas": "Privacy and Security, Ethics and Consent, Safety and Risk Management",
    "State": "Georgia"
  },
  {
    "URL": "https://legislature.idaho.gov/wp-content/uploads/sessioninfo/2024/interim/241115_aiwg_03_HERRING_Presentation%20to%20Idaho%20AI%20WG.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "unclassified",
    "Year": 2024,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Safety and Risk Management, Governance Committees",
    "State": "Idaho"
  },
  {
    "URL": "https://dopl.idaho.gov/wp-content/uploads/2025/06/2025-June-BOM-newsletter.pdf",
    "AI Applications": "['Clinical Documentation AI', 'Operational and Administrative Automation', 'Patient-facing AI', 'Robotics and Surgical AI', 'Education and Training AI', 'Research and Clinical Trial AI', 'Predictive Analytics', 'Public Health AI', 'Clinical Decision Support']",
    "Category": "State",
    "predicted_specialty": "surgery",
    "Year": 2025,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": "Idaho"
  },
  {
    "URL": "https://veterans.idaho.gov/wp-content/uploads/2024/05/2024-MAY-Bulletin.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "unclassified",
    "Year": 2024,
    "Focus Areas": "Reliability and Performance, Transparency and Explainability, Safety and Risk Management, Governance Committees",
    "State": "Idaho"
  },
  {
    "URL": "https://www.chfs.ky.gov/agencies/os/oats/polstand/080101AIGen%20AI.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "unclassified",
    "Year": 2025,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": "Kentucky"
  },
  {
    "URL": "https://mgaleg.maryland.gov/cmte_testimony/2025/fin/29604_03262025_92242-987.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "unclassified",
    "Year": 2025,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Governance Committees",
    "State": "Maryland"
  },
  {
    "URL": "https://mgaleg.maryland.gov/cmte_testimony/2025/hgo/1j4iZpX3Ve6-I1rNwbJGBSgJV2LOs03sD.pdf",
    "AI Applications": "['Clinical Documentation AI']",
    "Category": "State",
    "predicted_specialty": "unclassified",
    "Year": 2024,
    "Focus Areas": "Reliability and Performance",
    "State": "Maryland"
  },
  {
    "URL": "https://mgaleg.maryland.gov/2025RS/fnotes/bil_0000/hb0820.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "unclassified",
    "Year": 2026,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Governance Committees",
    "State": "Maryland"
  },
  {
    "URL": "https://mgaleg.maryland.gov/cmte_testimony/2025/fin/1GRIaGO_kWSq1rEV21eAeK6WPYNZggVvC.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "unclassified",
    "Year": 2025,
    "Focus Areas": "Transparency and Explainability, Ethics and Consent, Governance Committees",
    "State": "Maryland"
  },
  {
    "URL": "https://mgaleg.maryland.gov/2025RS/bills/hb/hb0820F.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "unclassified",
    "Year": 2017,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Governance Committees",
    "State": "Maryland"
  },
  {
    "URL": "https://ag.ny.gov/sites/default/files/reports/oag-aisymposiumreport.pdf",
    "AI Applications": "['Education and Training AI', 'Public Health AI', 'Medical Imaging AI', 'Research and Clinical Trial AI', 'Clinical Decision Support', 'Clinical Documentation AI', 'Operational and Administrative Automation', 'Patient-facing AI']",
    "Category": "State",
    "predicted_specialty": "unclassified",
    "Year": 2024,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent",
    "State": "New York"
  },
  {
    "URL": "https://info.nystateofhealth.ny.gov/sites/default/files/NYSOH%20Health%20Equity%20Portfolio.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "Obstetrics_Gynecology, psychiatry",
    "Year": "",
    "Focus Areas": "Bias and Fairness, Transparency and Explainability, Safety and Risk Management, Governance Committees",
    "State": "New York"
  },
  {
    "URL": "https://ahea.assembly.ca.gov/system/files/2025-05/background_paper_genai_in_health_care_joint_asm_health_privacy_hearing_5.28.pdf",
    "AI Applications": "['Clinical Documentation AI', 'Operational and Administrative Automation', 'Patient-facing AI', 'Education and Training AI', 'Research and Clinical Trial AI', 'Public Health AI', 'Medical Imaging AI', 'Robotics and Surgical AI', 'Clinical Decision Support', 'Predictive Analytics']",
    "Category": "State",
    "predicted_specialty": "psychiatry, neurology",
    "Year": 2025,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": "California"
  },
  {
    "URL": "https://mgaleg.maryland.gov/cmte_testimony/2025/fin/1xemGZLy9scMGuYG3fvyo0YGSzLoOo5j1.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "unclassified",
    "Year": 2025,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Transparency and Explainability, Safety and Risk Management, Governance Committees",
    "State": "Maryland"
  },
  {
    "URL": "https://www.health.ny.gov/health_care/medicaid/ebbrac/meetings/2024/docs/policy_brief_rpt.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "endocrinology, psychiatry",
    "Year": 2024,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Safety and Risk Management, Governance Committees",
    "State": "New York"
  },
  {
    "URL": "https://www.peba.sc.gov/sites/default/files/hcp_materials_march2025.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "endocrinology",
    "Year": 2024,
    "Focus Areas": "Reliability and Performance, Ethics and Consent, Governance Committees",
    "State": "South Carolina"
  },
  {
    "URL": "https://www.capitol.tn.gov/Bills/114/Bill/SB1261.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "unclassified",
    "Year": 2006,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management",
    "State": "Tennessee"
  },
  {
    "URL": "https://www.house.texas.gov/pdfs/committees/reports/interim/88interim/House-Select-Committee-on-Artificial-Intelligence-and-Emerging-Technologies-Interim-Report-2024.pdf",
    "AI Applications": "['Clinical Documentation AI', 'Medical Imaging AI', 'Operational and Administrative Automation', 'Patient-facing AI', 'Robotics and Surgical AI', 'Research and Clinical Trial AI', 'Public Health AI', 'Education and Training AI']",
    "Category": "State",
    "predicted_specialty": "unclassified",
    "Year": 2024,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": "Texas"
  },
  {
    "URL": "https://tsbde.texas.gov/78i8ljhbj/ADA-Use-of-AI-in-Dentistry.pdf",
    "AI Applications": "['Clinical Decision Support', 'Medical Imaging AI']",
    "Category": "State",
    "predicted_specialty": "radiology",
    "Year": 2024,
    "Focus Areas": "Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": "Texas"
  },
  {
    "URL": "https://ai.utah.gov/wp-content/uploads/Best-Practices-Mental-Health-Therapists.pdf",
    "AI Applications": "['Clinical Documentation AI', 'Patient-facing AI', 'Education and Training AI', 'Medical Imaging AI', 'Operational and Administrative Automation', 'Clinical Decision Support']",
    "Category": "State",
    "predicted_specialty": "psychiatry",
    "Year": 2025,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": "Utah"
  },
  {
    "URL": "https://mentalhealth.vermont.gov/sites/mentalhealth/files/ConfPres/Practical%20and%20Ethical%20Use%20of%20AI%20Maelisa%20McCaffrey.pdf",
    "AI Applications": "['Patient-facing AI', 'Clinical Documentation AI']",
    "Category": "State",
    "predicted_specialty": "psychiatry",
    "Year": 2014,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": "Vermont"
  },
  {
    "URL": "https://ago.vermont.gov/sites/ago/files/2024-03/Apple%20Complaint%20--%20filed%2C%20stamped.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "unclassified",
    "Year": 2005,
    "Focus Areas": "Privacy and Security, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": "Vermont"
  },
  {
    "URL": "https://gmcboard.vermont.gov/sites/gmcb/files/Sola%20Quote.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "radiology",
    "Year": 2019,
    "Focus Areas": "Reliability and Performance, Safety and Risk Management",
    "State": "Vermont"
  },
  {
    "URL": "https://lawfilesext.leg.wa.gov/biennium/2025-26/Pdf/Bills/Senate%20Bills/5395.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "unclassified",
    "Year": 2025,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": "Washington"
  },
  {
    "URL": "https://wmc.wa.gov/sites/default/files/public/Newsletter/2024Spring/WMCUpdateSpring2024.pdf",
    "AI Applications": "['Operational and Administrative Automation', 'Research and Clinical Trial AI', 'Clinical Decision Support', 'Clinical Documentation AI', 'Medical Imaging AI', 'Patient-facing AI', 'Predictive Analytics', 'Public Health AI', 'Education and Training AI']",
    "Category": "State",
    "predicted_specialty": "cardiology, endocrinology",
    "Year": 2024,
    "Focus Areas": "Reliability and Performance, Privacy and Security, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": "Washington"
  },
  {
    "URL": "https://watech.wa.gov/sites/default/files/2025-01/EO%2024-01%20Risk%20Guidance_Final.pdf",
    "AI Applications": "['Clinical Documentation AI', 'Medical Imaging AI']",
    "Category": "State",
    "predicted_specialty": "unclassified",
    "Year": 2024,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": "Washington"
  },
  {
    "URL": "https://wmc.wa.gov/sites/default/files/public/Newsletter/2024Spring/5.Equity_Spring2024.pdf",
    "AI Applications": "['Clinical Decision Support', 'Clinical Documentation AI', 'Operational and Administrative Automation', 'Patient-facing AI', 'Robotics and Surgical AI', 'Education and Training AI', 'Medical Imaging AI', 'Research and Clinical Trial AI', 'Predictive Analytics', 'Public Health AI']",
    "Category": "State",
    "predicted_specialty": "unclassified",
    "Year": "",
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Transparency and Explainability, Ethics and Consent",
    "State": "Washington"
  },
  {
    "URL": "https://lpnboard.wv.gov/executivedirector/PublishingImages/Pages/default/NCSBN%20Artificial%20Intelligence%20handout_2022DCM_avandergaag.pdf",
    "AI Applications": "['Education and Training AI', 'Research and Clinical Trial AI', 'Medical Imaging AI', 'Patient-facing AI']",
    "Category": "State",
    "predicted_specialty": "unclassified",
    "Year": 2020,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": "West Virginia"
  },
  {
    "URL": "https://dhhr.wv.gov/bms/BMSPUB/Documents/Quarter12024ProviderNewsletterFinal.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "unclassified",
    "Year": 2024,
    "Focus Areas": "Reliability and Performance, Privacy and Security, Safety and Risk Management, Governance Committees",
    "State": "West Virginia"
  },
  {
    "URL": "https://dhhr.wv.gov/bms/Provider/EHR/Documents/CMS%20SMHP%202020.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "radiology",
    "Year": 2020,
    "Focus Areas": "Reliability and Performance, Privacy and Security, Safety and Risk Management",
    "State": "West Virginia"
  },
  {
    "URL": "https://legis.wisconsin.gov/senate/28/bradley/media/5h3bvbnm/staff-brief.pdf",
    "AI Applications": "['Public Health AI']",
    "Category": "State",
    "predicted_specialty": "unclassified",
    "Year": 2024,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": "Wisconsin"
  },
  {
    "URL": "https://www.dhs.wisconsin.gov/non-dhs/dph/heart-month-cdpp-partner-presentation-jan-2025.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "cardiology",
    "Year": 2025,
    "Focus Areas": "Safety and Risk Management",
    "State": "Wisconsin"
  },
  {
    "URL": "https://www.biodiritto.org/ocmultibinary/download/4423/51767/1/de2e645d6bce65ab0e013e3208a22727/file/EPRS_STU%282022%29729512_EN.pdf",
    "AI Applications": "['Public Health AI', 'Operational and Administrative Automation', 'Patient-facing AI', 'Education and Training AI', 'Robotics and Surgical AI', 'Research and Clinical Trial AI', 'Clinical Decision Support', 'Clinical Documentation AI', 'Medical Imaging AI', 'Predictive Analytics']",
    "Category": "Professional Medical Organization",
    "predicted_specialty": "surgery, oncology, radiology, cardiology, pathology, gastroenterology, pulmonology, nephrology, psychiatry, neurology",
    "Year": 2022,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.fsmb.org/siteassets/advocacy/policies/incorporation-of-ai-into-practice.pdf",
    "AI Applications": "['Clinical Decision Support', 'Operational and Administrative Automation', 'Education and Training AI', 'Patient-facing AI', 'Clinical Documentation AI', 'Medical Imaging AI', 'Research and Clinical Trial AI', 'Public Health AI']",
    "Category": "Professional Medical Organization",
    "predicted_specialty": "unclassified",
    "Year": 2024,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.ama-assn.org/system/files/physician-ai-sentiment-report.pdf",
    "AI Applications": "['Patient-facing AI', 'Clinical Documentation AI']",
    "Category": "Professional Medical Organization",
    "predicted_specialty": "unclassified",
    "Year": 2023,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent",
    "State": ""
  },
  {
    "URL": "https://www.aclu.org/sites/default/files/field_document/algo_health_white_paper_draft_final_v4.pdf",
    "AI Applications": "['Patient-facing AI', 'Research and Clinical Trial AI']",
    "Category": "Professional Medical Organization",
    "predicted_specialty": "unclassified",
    "Year": 2020,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.ama-assn.org/system/files/ama-ai-principles.pdf",
    "AI Applications": "['Education and Training AI', 'Operational and Administrative Automation', 'Robotics and Surgical AI', 'Public Health AI', 'Clinical Documentation AI', 'Clinical Decision Support', 'Research and Clinical Trial AI']",
    "Category": "Professional Medical Organization",
    "predicted_specialty": "unclassified",
    "Year": 2018,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.chcf.org/wp-content/uploads/2024/04/ExaminingAIandHealthCare.pdf",
    "AI Applications": "['Public Health AI', 'Operational and Administrative Automation', 'Education and Training AI', 'Research and Clinical Trial AI', 'Clinical Documentation AI', 'Patient-facing AI', 'Clinical Decision Support']",
    "Category": "Professional Medical Organization",
    "predicted_specialty": "unclassified",
    "Year": 2024,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Transparency and Explainability, Ethics and Consent, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://pdfs.semanticscholar.org/bc04/b9be191a02831f46858e7689c16cfb0ddeca.pdf",
    "AI Applications": "['Education and Training AI']",
    "Category": "Academic Institution",
    "predicted_specialty": "radiology, cardiology, pulmonology",
    "Year": 2023,
    "Focus Areas": "Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management",
    "State": ""
  },
  {
    "URL": "https://protectpatientsnow.org/wp-content/uploads/2024/02/nejmhle2308901-1.pdf",
    "AI Applications": [],
    "Category": "Professional Medical Organization",
    "predicted_specialty": "unclassified",
    "Year": 2024,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://pathologyinnovationcc.org/s/P_nejmp2304993.pdf",
    "AI Applications": "['Education and Training AI']",
    "Category": "Professional Medical Organization",
    "predicted_specialty": "unclassified",
    "Year": 2023,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management",
    "State": ""
  },
  {
    "URL": "https://hai.stanford.edu/assets/files/2024-02/Facilitating-Responsible-Governance-Healthcare-AI.pdf",
    "AI Applications": [],
    "Category": "Academic Institution",
    "predicted_specialty": "unclassified",
    "Year": 2024,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://online.yale.edu/sites/default/files/2024-10/YaleCertificateProgramInMedicalSoftwareAndMedicalAI.pdf",
    "AI Applications": "['Medical Imaging AI']",
    "Category": "Professional Medical Organization",
    "predicted_specialty": "radiology",
    "Year": 2025,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Transparency and Explainability, Ethics and Consent",
    "State": ""
  },
  {
    "URL": "https://healthpolicy.duke.edu/sites/default/files/2019-11/dukemargolisaienableddxss.pdf",
    "AI Applications": "['Clinical Decision Support', 'Medical Imaging AI', 'Predictive Analytics', 'Clinical Documentation AI', 'Operational and Administrative Automation', 'Patient-facing AI', 'Education and Training AI', 'Research and Clinical Trial AI']",
    "Category": "Professional Medical Organization",
    "predicted_specialty": "cardiology",
    "Year": 2018,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://dho.stanford.edu/wp-content/uploads/FDA.pdf",
    "AI Applications": "['Patient-facing AI', 'Research and Clinical Trial AI']",
    "Category": "Academic Institution",
    "predicted_specialty": "pulmonology",
    "Year": 2015,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Transparency and Explainability, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://static1.squarespace.com/static/603ab50ab81d5532a0a4a42b/t/64ee0fca5901b07239942211/1693323210917/EPRS_STU%282022%29729512_EN.pdf",
    "AI Applications": "['Public Health AI', 'Operational and Administrative Automation', 'Patient-facing AI', 'Education and Training AI', 'Robotics and Surgical AI', 'Research and Clinical Trial AI', 'Clinical Decision Support', 'Clinical Documentation AI', 'Medical Imaging AI', 'Predictive Analytics']",
    "Category": "Professional Medical Organization",
    "predicted_specialty": "surgery, oncology, radiology, cardiology, pathology, gastroenterology, pulmonology, nephrology, psychiatry, neurology",
    "Year": 2022,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.cov.com/-/media/files/corporate/publications/2023/12/ai-brings-new-insurance-concerns-for-healthcare-providers.pdf",
    "AI Applications": "['Medical Imaging AI', 'Operational and Administrative Automation', 'Patient-facing AI', 'Robotics and Surgical AI']",
    "Category": "Professional Medical Organization",
    "predicted_specialty": "unclassified",
    "Year": 2023,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://triangle-octagon-8fxh.squarespace.com/s/R_1708961959366.pdf",
    "AI Applications": "['Education and Training AI', 'Medical Imaging AI', 'Patient-facing AI', 'Public Health AI', 'Clinical Documentation AI', 'Research and Clinical Trial AI', 'Predictive Analytics', 'Clinical Decision Support', 'Robotics and Surgical AI', 'Operational and Administrative Automation']",
    "Category": "Professional Medical Organization",
    "predicted_specialty": "radiology, cardiology, ophthalmology, neurology",
    "Year": 2023,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://fsi9-prod.s3.us-west-1.amazonaws.com/s3fs-public/2024-02/mello_senate_testimony-ai_healthcare.pdf",
    "AI Applications": [],
    "Category": "Academic Institution",
    "predicted_specialty": "unclassified",
    "Year": 2024,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://content.govdelivery.com/attachments/USFDA/2024/03/15/file_attachments/2815628/omp_aimedicalproducts_final_240313%20%281%29.pdf",
    "AI Applications": [],
    "Category": "Academic Institution",
    "predicted_specialty": "unclassified",
    "Year": 2023,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.ahima.org/media/twjmtnq4/2024-artificial-intelligence-regulatory-resource-guide-axs.pdf",
    "AI Applications": "['Clinical Decision Support']",
    "Category": "Professional Medical Organization",
    "predicted_specialty": "unclassified",
    "Year": 2024,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.ahima.org/media/b4fjlwbq/ahima-response-to-rep-bera-rfi_the-state-of-artificial-intelligence-in-health-care.pdf",
    "AI Applications": "['Operational and Administrative Automation', 'Clinical Documentation AI']",
    "Category": "Nonprofit",
    "predicted_specialty": "unclassified",
    "Year": 2024,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.ahima.org/media/dp4jjue0/faq-ocr-anti-discrimination-final-rule-v2-final.pdf",
    "AI Applications": "['Clinical Decision Support']",
    "Category": "Professional Medical Organization",
    "predicted_specialty": "unclassified",
    "Year": 2024,
    "Focus Areas": "Bias and Fairness, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.ahima.org/media/uzqnxgj0/2025-advocacy-agenda_final.pdf",
    "AI Applications": "['Education and Training AI']",
    "Category": "Professional Medical Organization",
    "predicted_specialty": "unclassified",
    "Year": 2025,
    "Focus Areas": "Bias and Fairness, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.ahima.org/media/3a3axqt1/evolution_of_coding_whitepaper_agshealth_ada.pdf",
    "AI Applications": [],
    "Category": "Professional Medical Organization",
    "predicted_specialty": "unclassified",
    "Year": "",
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.ahima.org/media/hxbdw0h5/ahima-cip-codes-nomination-letter-draft.pdf",
    "AI Applications": "['Operational and Administrative Automation', 'Education and Training AI']",
    "Category": "Nonprofit",
    "predicted_specialty": "unclassified",
    "Year": 2024,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Ethics and Consent, Safety and Risk Management",
    "State": ""
  },
  {
    "URL": "https://www.ahima.org/media/wnriy4bp/ahima-letter-to-congressional-leadership.pdf",
    "AI Applications": "['Operational and Administrative Automation', 'Education and Training AI', 'Clinical Documentation AI']",
    "Category": "Professional Medical Organization",
    "predicted_specialty": "unclassified",
    "Year": 2025,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.ahima.org/media/0dqk1sms/joint-industry-letter-cures-2_0-rfi-response.pdf",
    "AI Applications": [],
    "Category": "Professional Medical Organization",
    "predicted_specialty": "unclassified",
    "Year": 2016,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Transparency and Explainability, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.ahima.org/media/hykh3n2k/2020-hiim-domains.pdf",
    "AI Applications": [],
    "Category": "Professional Medical Organization",
    "predicted_specialty": "unclassified",
    "Year": "",
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Ethics and Consent, Safety and Risk Management",
    "State": ""
  },
  {
    "URL": "https://www.ama-assn.org/system/files/future-health-augmented-intelligence-health-care.pdf",
    "AI Applications": "['Education and Training AI', 'Medical Imaging AI', 'Patient-facing AI', 'Public Health AI', 'Clinical Documentation AI', 'Research and Clinical Trial AI', 'Predictive Analytics', 'Clinical Decision Support', 'Robotics and Surgical AI', 'Operational and Administrative Automation']",
    "Category": "Professional Medical Organization",
    "predicted_specialty": "radiology, cardiology, ophthalmology, neurology",
    "Year": 2023,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.ama-assn.org/system/files/issue-brief-ai-state-advocacy-policy-priorities.pdf",
    "AI Applications": "['Clinical Decision Support', 'Clinical Documentation AI', 'Medical Imaging AI', 'Operational and Administrative Automation', 'Patient-facing AI', 'Education and Training AI', 'Research and Clinical Trial AI']",
    "Category": "Professional Medical Organization",
    "predicted_specialty": "unclassified",
    "Year": 2024,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.ama-assn.org/system/files/ai-educator-guide.pdf",
    "AI Applications": "['Education and Training AI']",
    "Category": "Professional Medical Organization",
    "predicted_specialty": "pediatrics",
    "Year": 2025,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management",
    "State": ""
  },
  {
    "URL": "https://www.ama-assn.org/system/files/2019-01/augmented-intelligence-policy-report.pdf",
    "AI Applications": "['Education and Training AI', 'Medical Imaging AI', 'Clinical Decision Support', 'Clinical Documentation AI', 'Operational and Administrative Automation', 'Patient-facing AI', 'Robotics and Surgical AI', 'Research and Clinical Trial AI', 'Public Health AI', 'Predictive Analytics']",
    "Category": "Professional Medical Organization",
    "predicted_specialty": "unclassified",
    "Year": 2018,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Transparency and Explainability, Ethics and Consent, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.ama-assn.org/system/files/chatgpt-what-physicians-should-consider.pdf",
    "AI Applications": "['Clinical Documentation AI']",
    "Category": "Professional Medical Organization",
    "predicted_specialty": "unclassified",
    "Year": 2023,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management",
    "State": ""
  },
  {
    "URL": "https://www.ama-assn.org/system/files/lozovatsky-insight-summit-presentation-slides.pdf",
    "AI Applications": "['Clinical Documentation AI']",
    "Category": "Professional Medical Organization",
    "predicted_specialty": "unclassified",
    "Year": 2025,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent",
    "State": ""
  },
  {
    "URL": "https://www.ama-assn.org/system/files/i24-ipps-ed-session-ai-lightning-rounds-lozovatsky.pdf",
    "AI Applications": [],
    "Category": "Professional Medical Organization",
    "predicted_specialty": "unclassified",
    "Year": 2024,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent",
    "State": ""
  },
  {
    "URL": "https://searchlf.ama-assn.org/letter/documentDownload?uri=/unstructured/binary/letter/LETTERS/lfscls.zip/2024-3-8-Letter-to-FSMB-Comments-Guidelines-Recommendations-on-AI-FINAL-002.pdf",
    "AI Applications": [],
    "Category": "Professional Medical Organization",
    "predicted_specialty": "unclassified",
    "Year": 2024,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://brand.amia.org/m/664b5e658f3a4a87/original/4-c-Final-AMIA-Factsheet_Responsible-AI-Integration-April-2024-1.pdf",
    "AI Applications": "['Clinical Documentation AI', 'Operational and Administrative Automation']",
    "Category": "Professional Medical Organization",
    "predicted_specialty": "unclassified",
    "Year": 2023,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://brand.amia.org/m/a88e9a52a3be72d/original/AMIA-Factsheet_Responsible-Use-of-AI-in-Healthcare.pdf",
    "AI Applications": "['Education and Training AI', 'Research and Clinical Trial AI', 'Clinical Documentation AI']",
    "Category": "Professional Medical Organization",
    "predicted_specialty": "unclassified",
    "Year": 2023,
    "Focus Areas": "Bias and Fairness, Privacy and Security, Transparency and Explainability, Ethics and Consent, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://brand.amia.org/m/2c9af1ce6b30ebd2/original/DDA-Finalist-2024-Sirui_Ding.pdf",
    "AI Applications": "['Clinical Documentation AI', 'Operational and Administrative Automation', 'Patient-facing AI', 'Robotics and Surgical AI', 'Education and Training AI', 'Research and Clinical Trial AI', 'Clinical Decision Support', 'Predictive Analytics']",
    "Category": "Academic Institution",
    "predicted_specialty": "surgery, cardiology, gastroenterology, pulmonology, nephrology, infectious_diseases",
    "Year": 2024,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Transparency and Explainability, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://brand.amia.org/m/3416190c4ed987db/original/AMIA-DCI-AI-Policy-Brief.pdf",
    "AI Applications": "['Clinical Documentation AI']",
    "Category": "Professional Medical Organization",
    "predicted_specialty": "unclassified",
    "Year": 2022,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://brand.amia.org/m/157a583abcb20922/original/Xu-2024-election.pdf",
    "AI Applications": [],
    "Category": "Academic Institution",
    "predicted_specialty": "unclassified",
    "Year": 2024,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Transparency and Explainability",
    "State": ""
  },
  {
    "URL": "https://brand.amia.org/m/1e46ec873cb93f38/original/Resources-on-AI-Bias-Ep-30.pdf",
    "AI Applications": [],
    "Category": "Professional Medical Organization",
    "predicted_specialty": "unclassified",
    "Year": 2022,
    "Focus Areas": "Bias and Fairness, Transparency and Explainability, Ethics and Consent, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://brand.amia.org/m/6952f38443f8661/original/Friends-of-ASTP_Senate-HELP-HHS-Budget-Hearing.pdf",
    "AI Applications": [],
    "Category": "Professional Medical Organization",
    "predicted_specialty": "unclassified",
    "Year": 2026,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://brand.amia.org/m/11e36a0494d4bc9a/original/AMIA-Public-Policy-Principles-2024-Final.pdf",
    "AI Applications": "['Medical Imaging AI', 'Education and Training AI', 'Research and Clinical Trial AI', 'Public Health AI']",
    "Category": "Professional Medical Organization",
    "predicted_specialty": "unclassified",
    "Year": 2024,
    "Focus Areas": "Bias and Fairness, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.himss.org/sites/hde/files/media/file/2024/03/01/2023-himss-cybersecurity-survey-x.pdf",
    "AI Applications": "['Education and Training AI']",
    "Category": "Professional Medical Organization",
    "predicted_specialty": "unclassified",
    "Year": 2023,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://gkc.himss.org/sites/hde/files/media/file/2024/01/31/ai-solutions-for-nurses-to-drive-efficiency-and-resilience.pdf",
    "AI Applications": "['Operational and Administrative Automation', 'Education and Training AI', 'Clinical Decision Support', 'Clinical Documentation AI', 'Medical Imaging AI', 'Predictive Analytics', 'Research and Clinical Trial AI', 'Patient-facing AI', 'Public Health AI', 'Robotics and Surgical AI']",
    "Category": "Professional Medical Organization",
    "predicted_specialty": "infectious_diseases",
    "Year": 2027,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://legacy.himss.org/sites/hde/files/media/file/2024/03/08/2023-regulatory-history-for-cds_final_4.pdf",
    "AI Applications": "['Clinical Decision Support', 'Medical Imaging AI']",
    "Category": "Professional Medical Organization",
    "predicted_specialty": "cardiology",
    "Year": 2014,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://legacy.himss.org/sites/hde/files/media/file/2024/04/05/himss_article_iberiancommunity.pdf",
    "AI Applications": "['Clinical Documentation AI', 'Operational and Administrative Automation', 'Education and Training AI', 'Public Health AI', 'Clinical Decision Support', 'Patient-facing AI', 'Research and Clinical Trial AI']",
    "Category": "Professional Medical Organization",
    "predicted_specialty": "unclassified",
    "Year": 2024,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://gkc.himss.org/sites/hde/files/media/file/2024/10/02/smc-davies-award-case-study-pressure-injury-management.pdf",
    "AI Applications": [],
    "Category": "Professional Medical Organization",
    "predicted_specialty": "unclassified",
    "Year": 2024,
    "Focus Areas": "Reliability and Performance, Privacy and Security, Safety and Risk Management",
    "State": ""
  },
  {
    "URL": "https://keystone.himss.org/sites/hde/files/media/file/2022/12/21/dhi-white-paper.pdf",
    "AI Applications": "['Public Health AI', 'Predictive Analytics', 'Patient-facing AI']",
    "Category": "Professional Medical Organization",
    "predicted_specialty": "radiology",
    "Year": 2019,
    "Focus Areas": "Bias and Fairness, Privacy and Security, Ethics and Consent, Safety and Risk Management",
    "State": ""
  },
  {
    "URL": "https://gkc.himss.org/sites/hde/files/media/file/2023/09/27/dhage-report_2023_v6.pdf",
    "AI Applications": "['Public Health AI']",
    "Category": "Professional Medical Organization",
    "predicted_specialty": "unclassified",
    "Year": 2023,
    "Focus Areas": "Bias and Fairness, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://easterncanada.himss.org/sites/hde/files/2023-09/q2-thought-leadership-himss-on_0.pdf",
    "AI Applications": "['Research and Clinical Trial AI', 'Clinical Documentation AI']",
    "Category": "Professional Medical Organization",
    "predicted_specialty": "unclassified",
    "Year": 2023,
    "Focus Areas": "Bias and Fairness, Transparency and Explainability, Ethics and Consent",
    "State": ""
  },
  {
    "URL": "https://www.himss.org/sites/hde/files/handout-HA5_46.pdf",
    "AI Applications": [],
    "Category": "Professional Medical Organization",
    "predicted_specialty": "unclassified",
    "Year": 2021,
    "Focus Areas": "Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management",
    "State": ""
  },
  {
    "URL": "https://newengland.himss.org/sites/hde/files/media/file/2023/08/11/stanford-medicine-himss-davies-2023-machine-learning-enabled-advance-care-planning-final.pdf",
    "AI Applications": [],
    "Category": "Professional Medical Organization",
    "predicted_specialty": "oncology",
    "Year": 2023,
    "Focus Areas": "Reliability and Performance, Transparency and Explainability",
    "State": ""
  },
  {
    "URL": "https://canadianprairies.himss.org/sites/hde/files/media/file/2022/12/21/dhi-white-paper.pdf",
    "AI Applications": "['Public Health AI', 'Predictive Analytics', 'Patient-facing AI']",
    "Category": "Professional Medical Organization",
    "predicted_specialty": "radiology",
    "Year": 2019,
    "Focus Areas": "Bias and Fairness, Privacy and Security, Ethics and Consent, Safety and Risk Management",
    "State": ""
  },
  {
    "URL": "https://northernohio.himss.org/sites/hde/files/media/file/2022/12/01/himss_nurseinfocollaboration_wp.pdf",
    "AI Applications": [],
    "Category": "Professional Medical Organization",
    "predicted_specialty": "unclassified",
    "Year": 2022,
    "Focus Areas": "Reliability and Performance, Privacy and Security, Safety and Risk Management",
    "State": ""
  },
  {
    "URL": "https://greaterkansascity.himss.org/sites/hde/files/media/file/2024/07/10/sdoh_white-paper.pdf",
    "AI Applications": [],
    "Category": "Professional Medical Organization",
    "predicted_specialty": "infectious_diseases",
    "Year": 2023,
    "Focus Areas": "Bias and Fairness, Privacy and Security, Ethics and Consent, Safety and Risk Management",
    "State": ""
  },
  {
    "URL": "https://greaterkansascity.himss.org/sites/hde/files/driving-change-blog-series-2-x.pdf",
    "AI Applications": [],
    "Category": "Professional Medical Organization",
    "predicted_specialty": "unclassified",
    "Year": "",
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.aha.org/system/files/media/file/2019/11/Market_Insights_AI_Care_Delivery.pdf",
    "AI Applications": "['Operational and Administrative Automation', 'Clinical Documentation AI', 'Medical Imaging AI', 'Patient-facing AI', 'Robotics and Surgical AI', 'Education and Training AI', 'Research and Clinical Trial AI', 'Public Health AI', 'Clinical Decision Support', 'Predictive Analytics']",
    "Category": "Professional Medical Organization",
    "predicted_specialty": "unclassified",
    "Year": "",
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.aha.org/system/files/media/file/2025/01/Market_Insights_AI_Report-2025.pdf",
    "AI Applications": "['Operational and Administrative Automation', 'Clinical Documentation AI', 'Medical Imaging AI', 'Patient-facing AI', 'Predictive Analytics', 'Research and Clinical Trial AI']",
    "Category": "Professional Medical Organization",
    "predicted_specialty": "unclassified",
    "Year": 2019,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.aha.org/system/files/media/file/2024/05/aha-response-to-representative-bera-on-artificial-intelligence-in-the-health-care-sector-letter-5-6-2024.pdf",
    "AI Applications": "['Education and Training AI', 'Patient-facing AI', 'Public Health AI', 'Clinical Decision Support']",
    "Category": "Professional Medical Organization",
    "predicted_specialty": "unclassified",
    "Year": 2024,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.aha.org/system/files/media/file/2019/09/Market_Insights_AI_Workforce_2.pdf",
    "AI Applications": "['Operational and Administrative Automation', 'Education and Training AI', 'Clinical Decision Support', 'Robotics and Surgical AI', 'Clinical Documentation AI', 'Medical Imaging AI', 'Patient-facing AI', 'Research and Clinical Trial AI', 'Public Health AI']",
    "Category": "Professional Medical Organization",
    "predicted_specialty": "unclassified",
    "Year": "",
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.aha.org/system/files/media/file/2019/05/05072019-ms-innovation.pdf",
    "AI Applications": "['Patient-facing AI']",
    "Category": "Professional Medical Organization",
    "predicted_specialty": "unclassified",
    "Year": 2020,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management",
    "State": ""
  },
  {
    "URL": "https://www.aha.org/system/files/media/file/2023/02/Health-Industry-Cybersecurity-Artificial-Intelligence-Machine-Learning-1.pdf",
    "AI Applications": "['Predictive Analytics']",
    "Category": "Professional Medical Organization",
    "predicted_specialty": "infectious_diseases",
    "Year": 2022,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.aha.org/system/files/media/file/2019/09/Market_Insights_AI_Scenarios_0.pdf",
    "AI Applications": "['Operational and Administrative Automation', 'Education and Training AI']",
    "Category": "Professional Medical Organization",
    "predicted_specialty": "unclassified",
    "Year": 2019,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.aha.org/system/files/media/file/2019/10/Market_Insights_AI-Landscape.pdf",
    "AI Applications": "['Operational and Administrative Automation', 'Clinical Documentation AI', 'Patient-facing AI', 'Clinical Decision Support', 'Education and Training AI', 'Research and Clinical Trial AI', 'Medical Imaging AI', 'Robotics and Surgical AI', 'Public Health AI', 'Predictive Analytics']",
    "Category": "Professional Medical Organization",
    "predicted_specialty": "unclassified",
    "Year": "",
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.aha.org/system/files/media/file/2024/02/2024-Health-Care-Disruption-Outlook.pdf",
    "AI Applications": [],
    "Category": "Professional Medical Organization",
    "predicted_specialty": "unclassified",
    "Year": 2024,
    "Focus Areas": "Reliability and Performance, Safety and Risk Management",
    "State": ""
  },
  {
    "URL": "https://trustees.aha.org/system/files/media/file/2021/01/Martin_Top%2010%20Emerging%20Trends.pdf",
    "AI Applications": "['Medical Imaging AI', 'Operational and Administrative Automation']",
    "Category": "Professional Medical Organization",
    "predicted_specialty": "unclassified",
    "Year": 2021,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Safety and Risk Management",
    "State": ""
  },
  {
    "URL": "https://sponsor.aha.org/system/files/media/file/2020/01/aha-trendwatch-hospital-and-health-system-workforce-strategic-planning2_0.pdf",
    "AI Applications": "['Operational and Administrative Automation', 'Education and Training AI']",
    "Category": "Professional Medical Organization",
    "predicted_specialty": "unclassified",
    "Year": 2020,
    "Focus Areas": "Reliability and Performance, Privacy and Security, Safety and Risk Management",
    "State": ""
  },
  {
    "URL": "https://pages.acr.org/rs/598-TRA-244/images/Evaluating%20AI%20Devices%20-%20Segui.pdf",
    "AI Applications": "['Patient-facing AI', 'Medical Imaging AI']",
    "Category": "Professional Medical Organization",
    "predicted_specialty": "radiology",
    "Year": 2018,
    "Focus Areas": "Reliability and Performance, Transparency and Explainability, Safety and Risk Management",
    "State": ""
  },
  {
    "URL": "https://pages.acr.org/rs/598-TRA-244/images/Evalutating%20AI%20Devices%20-%20Gallas.pdf",
    "AI Applications": [],
    "Category": "Professional Medical Organization",
    "predicted_specialty": "oncology, radiology",
    "Year": 2000,
    "Focus Areas": "Reliability and Performance, Transparency and Explainability, Safety and Risk Management",
    "State": ""
  },
  {
    "URL": "https://pages.acr.org/rs/598-TRA-244/images/Deploying%20AI%20into%20the%20Clinical%20Radiology%20Workflow%20-%20Judy.pdf",
    "AI Applications": [],
    "Category": "Academic Institution",
    "predicted_specialty": "radiology",
    "Year": 2018,
    "Focus Areas": "Reliability and Performance, Transparency and Explainability, Safety and Risk Management",
    "State": ""
  },
  {
    "URL": "https://ailab.acr.org/doc/AI-LAB%20Reference%20Architecture%20Framework.pdf",
    "AI Applications": [],
    "Category": "Professional Medical Organization",
    "predicted_specialty": "radiology",
    "Year": "",
    "Focus Areas": "Reliability and Performance, Privacy and Security, Transparency and Explainability, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.ihi.org/sites/default/files/2024-05/Patient-Safety-AI_Considerations-for-GenAI-Developers.pdf",
    "AI Applications": "['Education and Training AI', 'Clinical Documentation AI']",
    "Category": "Professional Medical Organization",
    "predicted_specialty": "unclassified",
    "Year": 2024,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.ihi.org/sites/default/files/2024-05/Artificial-Intelligence-in-Health-Care-Implications-for-Safety.pdf",
    "AI Applications": "['Clinical Documentation AI', 'Education and Training AI', 'Operational and Administrative Automation', 'Patient-facing AI', 'Public Health AI', 'Clinical Decision Support', 'Research and Clinical Trial AI', 'Medical Imaging AI', 'Robotics and Surgical AI', 'Predictive Analytics']",
    "Category": "Academic Institution",
    "predicted_specialty": "unclassified",
    "Year": 2024,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.ihi.org/sites/default/files/2024-05/Patient-Safety-AI_Considerations-for-Health-Care-Systems.pdf",
    "AI Applications": "['Education and Training AI', 'Clinical Documentation AI']",
    "Category": "Professional Medical Organization",
    "predicted_specialty": "unclassified",
    "Year": 2024,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.ihi.org/sites/default/files/2024-02/IHIInnovationReport_Machine-Learning-to-Improve-Safety-in-Home-for-Adults.pdf",
    "AI Applications": "['Predictive Analytics', 'Clinical Decision Support', 'Education and Training AI', 'Patient-facing AI']",
    "Category": "Professional Medical Organization",
    "predicted_specialty": "unclassified",
    "Year": 2022,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.ihi.org/sites/default/files/2024-05/Patient-Safety-AI_Considerations-for-Regulators-Policymakers.pdf",
    "AI Applications": "['Education and Training AI']",
    "Category": "Professional Medical Organization",
    "predicted_specialty": "unclassified",
    "Year": 2024,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.ihi.org/sites/default/files/2024-05/Patient-Safety-AI_Considerations-for-Clinicians.pdf",
    "AI Applications": "['Clinical Documentation AI', 'Education and Training AI', 'Clinical Decision Support']",
    "Category": "Professional Medical Organization",
    "predicted_specialty": "unclassified",
    "Year": 2024,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent",
    "State": ""
  },
  {
    "URL": "https://www.ihi.org/sites/default/files/IHIAchievingHospitalWidePatientFlowWhitePaper.pdf",
    "AI Applications": [],
    "Category": "Professional Medical Organization",
    "predicted_specialty": "surgery, psychiatry, ophthalmology, infectious_diseases",
    "Year": 2020,
    "Focus Areas": "Reliability and Performance, Privacy and Security, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.ihi.org/sites/default/files/resources/tool/Transforming-Health-Care-Through-Innovative-Nurse-Led-Care-Delivery.pdf",
    "AI Applications": [],
    "Category": "Professional Medical Organization",
    "predicted_specialty": "unclassified",
    "Year": 2024,
    "Focus Areas": "Reliability and Performance, Privacy and Security, Safety and Risk Management",
    "State": ""
  },
  {
    "URL": "https://www.acep.org/siteassets/uploads/uploaded-files/acep/quality/avoidable-imaging-webinars/avoidable-imaging-initiative_nov.pdf",
    "AI Applications": [],
    "Category": "Professional Medical Organization",
    "predicted_specialty": "unclassified",
    "Year": 2016,
    "Focus Areas": "Reliability and Performance, Privacy and Security, Ethics and Consent, Safety and Risk Management",
    "State": ""
  },
  {
    "URL": "https://www.acep.org/siteassets/sites/acep/media/administration/foem_patient.pdf",
    "AI Applications": "['Medical Imaging AI', 'Patient-facing AI']",
    "Category": "Professional Medical Organization",
    "predicted_specialty": "infectious_diseases",
    "Year": 2019,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management",
    "State": ""
  },
  {
    "URL": "https://www.ruralhealth.us/getmedia/74e64bf7-f004-4daa-8a4f-d2c1cd43d1b9/09-16-20-NRHA-RHC-CAH-Conference-agenda.pdf",
    "AI Applications": [],
    "Category": "Professional Medical Organization",
    "predicted_specialty": "unclassified",
    "Year": 2020,
    "Focus Areas": "Reliability and Performance",
    "State": ""
  },
  {
    "URL": "https://www.ruralhealth.us/getmedia/b5799716-ba7a-4cf4-937d-efb2595d29c9/05-12-23-2023-AC-RHIS-agenda-FINAL.pdf",
    "AI Applications": [],
    "Category": "Professional Medical Organization",
    "predicted_specialty": "Obstetrics_Gynecology, psychiatry",
    "Year": 2023,
    "Focus Areas": "Reliability and Performance, Privacy and Security, Safety and Risk Management",
    "State": ""
  },
  {
    "URL": "https://ncvhs.hhs.gov/wp-content/uploads/2024/01/NCVHS-ICD-11-RFI-Responses-final.pdf",
    "AI Applications": "['Robotics and Surgical AI', 'Clinical Documentation AI', 'Operational and Administrative Automation', 'Research and Clinical Trial AI']",
    "Category": "Federal",
    "predicted_specialty": "Obstetrics_Gynecology, pulmonology, infectious_diseases",
    "Year": 2023,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://aspe.hhs.gov/sites/default/files/documents/62d8a7a4d673e659b4c38086f43c7e49/PTAC-TCOC-Escan.pdf",
    "AI Applications": [],
    "Category": "Federal",
    "predicted_specialty": "Obstetrics_Gynecology, oncology, cardiology, gastroenterology, endocrinology, psychiatry, neurology, infectious_diseases",
    "Year": 2022,
    "Focus Areas": "Reliability and Performance, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.healthit.gov/sites/default/files/page/2021-09/ONC%20Training%20Data%20for%20ML_Implementation_Guide%20Project%20Overview.pdf",
    "AI Applications": [],
    "Category": "Federal",
    "predicted_specialty": "nephrology",
    "Year": 2021,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Transparency and Explainability, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.healthit.gov/sites/default/files/onc_pghd_final_white_paper.pdf",
    "AI Applications": "['Public Health AI']",
    "Category": "Federal",
    "predicted_specialty": "surgery, cardiology, endocrinology",
    "Year": 2024,
    "Focus Areas": "Safety and Risk Management",
    "State": ""
  },
  {
    "URL": "https://www.healthit.gov/sites/default/files/page/2021-01/GDHP-Benefits%20Realisation%20Sharing%20Insights.pdf",
    "AI Applications": "['Public Health AI']",
    "Category": "Federal",
    "predicted_specialty": "endocrinology, psychiatry",
    "Year": 2020,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Safety and Risk Management",
    "State": ""
  },
  {
    "URL": "https://irp.nih.gov/system/files/media/file/2025-05/nih_artificial_intelligence_symposium_2025-05-16_program_booklet_v1.pdf",
    "AI Applications": "['Research and Clinical Trial AI', 'Clinical Documentation AI', 'Medical Imaging AI']",
    "Category": "Federal",
    "predicted_specialty": "surgery, oncology, radiology, cardiology, pathology, gastroenterology, endocrinology, pulmonology, nephrology, psychiatry, neurology, infectious_diseases",
    "Year": 2025,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Transparency and Explainability, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://seed.nih.gov/sites/default/files/2024-04/Regulatory-Knowledge-Guide-for-In-Vitro-Diagnostics.pdf",
    "AI Applications": [],
    "Category": "Federal",
    "predicted_specialty": "unclassified",
    "Year": 2003,
    "Focus Areas": "Reliability and Performance, Privacy and Security, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.ncbi.nlm.nih.gov/books/NBK602815/pdf/Bookshelf_NBK602815.pdf",
    "AI Applications": "['Research and Clinical Trial AI', 'Medical Imaging AI', 'Patient-facing AI', 'Clinical Decision Support']",
    "Category": "Federal",
    "predicted_specialty": "surgery, oncology, radiology, pathology, pulmonology, neurology, infectious_diseases",
    "Year": 2024,
    "Focus Areas": "Reliability and Performance, Transparency and Explainability, Safety and Risk Management",
    "State": ""
  },
  {
    "URL": "https://www.ncbi.nlm.nih.gov/books/NBK606561/pdf/Bookshelf_NBK606561.pdf",
    "AI Applications": "['Research and Clinical Trial AI', 'Operational and Administrative Automation', 'Patient-facing AI', 'Medical Imaging AI', 'Clinical Decision Support', 'Education and Training AI']",
    "Category": "Federal",
    "predicted_specialty": "psychiatry, neurology",
    "Year": 2024,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.nist.gov/system/files/documents/2019/06/06/nist-ai-rfi-ama-001.pdf",
    "AI Applications": "['Education and Training AI', 'Medical Imaging AI', 'Clinical Decision Support', 'Clinical Documentation AI', 'Operational and Administrative Automation', 'Patient-facing AI', 'Robotics and Surgical AI', 'Research and Clinical Trial AI', 'Public Health AI', 'Predictive Analytics']",
    "Category": "Federal",
    "predicted_specialty": "unclassified",
    "Year": 2019,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Transparency and Explainability, Ethics and Consent, Governance Committees",
    "State": ""
  },
  {
    "URL": "http://nvlpubs.nist.gov/nistpubs/ir/2022/NIST.IR.8433.pdf",
    "AI Applications": [],
    "Category": "Federal",
    "predicted_specialty": "unclassified",
    "Year": 2022,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://apcp.assembly.ca.gov/system/files/2025-04/ab-1018-bauer-kahan-apcp-analysis.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "unclassified",
    "Year": 2025,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": "California"
  },
  {
    "URL": "https://www.courts.wa.gov/subsite/mjc/docs/2019/AI_Now_2018_Report.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "unclassified",
    "Year": 2018,
    "Focus Areas": "Bias and Fairness, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": "Washington"
  },
  {
    "URL": "https://www.hca.wa.gov/assets/program/Director-final-topic-selection-2024.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "surgery, Obstetrics_Gynecology, oncology, pathology, gastroenterology, endocrinology, nephrology, pediatrics, dermatology, neurology, infectious_diseases",
    "Year": 2024,
    "Focus Areas": "Reliability and Performance, Safety and Risk Management, Governance Committees",
    "State": "Washington"
  },
  {
    "URL": "https://www.medrxiv.org/content/10.1101/2025.06.07.25329176v1.full.pdf",
    "AI Applications": "['Clinical Decision Support']",
    "Category": "Academic Institution",
    "predicted_specialty": "unclassified",
    "Year": 2025,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Safety and Risk Management",
    "State": ""
  },
  {
    "URL": "https://pdfs.semanticscholar.org/8497/a2a1b8c1ad9726c0bfbff7880408106d61ce.pdf",
    "AI Applications": "['Medical Imaging AI', 'Research and Clinical Trial AI', 'Clinical Decision Support']",
    "Category": "Professional Medical Organization",
    "predicted_specialty": "oncology, radiology, pathology",
    "Year": "",
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Transparency and Explainability, Ethics and Consent",
    "State": ""
  },
  {
    "URL": "https://milkeninstitute.org/sites/default/files/2022-03/Landscapes%20of%20Trust_FINAL.pdf",
    "AI Applications": [],
    "Category": "Nonprofit",
    "predicted_specialty": "unclassified",
    "Year": 2022,
    "Focus Areas": "Bias and Fairness, Ethics and Consent, Safety and Risk Management",
    "State": ""
  },
  {
    "URL": "https://people.cs.vt.edu/~aislingk/papers/jesso_FRONTIERS22.pdf",
    "AI Applications": "['Research and Clinical Trial AI', 'Clinical Decision Support', 'Clinical Documentation AI', 'Education and Training AI']",
    "Category": "Academic Institution",
    "predicted_specialty": "unclassified",
    "Year": 2022,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.hbs.edu/ris/Publication%20Files/DeFreitas%20-%20Nature%20Human%20Behavior%20-%20Psychological%20Barriers%20to%20AI_b802852e-5cfb-4dca-8e68-d45af0b7d818.pdf",
    "AI Applications": [],
    "Category": "Academic Institution",
    "predicted_specialty": "unclassified",
    "Year": 2023,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://healthpolicy.duke.edu/sites/default/files/2020-09/Duke%20Greenwall%20White%20Paper%20September%202020.pdf",
    "AI Applications": "['Clinical Decision Support', 'Clinical Documentation AI', 'Robotics and Surgical AI', 'Research and Clinical Trial AI', 'Medical Imaging AI', 'Predictive Analytics', 'Operational and Administrative Automation', 'Education and Training AI', 'Patient-facing AI']",
    "Category": "Academic Institution",
    "predicted_specialty": "unclassified",
    "Year": 2019,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Transparency and Explainability, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.stat.cmu.edu/~rfogliat/files/msr_study.pdf",
    "AI Applications": [],
    "Category": "Professional Medical Organization",
    "predicted_specialty": "oncology, radiology, neurology",
    "Year": 2022,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://digitalcollections.ohsu.edu/record/9957/files/Collins.Benjamin.2022.pdf",
    "AI Applications": "['Education and Training AI']",
    "Category": "Academic Institution",
    "predicted_specialty": "infectious_diseases",
    "Year": 2022,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.nature.com/articles/s41467-024-50952-3.pdf",
    "AI Applications": "['Research and Clinical Trial AI']",
    "Category": "Professional Medical Organization",
    "predicted_specialty": "dermatology",
    "Year": 2024,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://bmcmedethics.biomedcentral.com/counter/pdf/10.1186/s12910-022-00842-4.pdf",
    "AI Applications": [],
    "Category": "Professional Medical Organization",
    "predicted_specialty": "unclassified",
    "Year": 2022,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.jneurology.com/articles/enhancing-intracranial-aneurysm-detection-with-artificial-intelligence-in-radiology.pdf",
    "AI Applications": "['Medical Imaging AI', 'Robotics and Surgical AI', 'Research and Clinical Trial AI', 'Operational and Administrative Automation']",
    "Category": "Professional Medical Organization",
    "predicted_specialty": "radiology",
    "Year": 2025,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://nielsvanberkel.com/files/publications/dis2024a.pdf",
    "AI Applications": "['Patient-facing AI', 'Clinical Decision Support']",
    "Category": "Academic Institution",
    "predicted_specialty": "oncology, dermatology",
    "Year": 2024,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://s3.ca-central-1.amazonaws.com/assets.jmir.org/assets/preprints/preprint-67485-submitted.pdf",
    "AI Applications": "['Education and Training AI', 'Clinical Decision Support', 'Clinical Documentation AI', 'Medical Imaging AI', 'Operational and Administrative Automation', 'Robotics and Surgical AI', 'Research and Clinical Trial AI', 'Patient-facing AI', 'Public Health AI']",
    "Category": "Professional Medical Organization",
    "predicted_specialty": "radiology",
    "Year": 2024,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://themedicon.com/pdf/medicalsciences/MCMS-07-222.pdf",
    "AI Applications": [],
    "Category": "Professional Medical Organization",
    "predicted_specialty": "unclassified",
    "Year": 2024,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://journalofethics.ama-assn.org/sites/journalofethics.ama-assn.org/files/2019-01/joe-1902_0.pdf",
    "AI Applications": "['Patient-facing AI', 'Robotics and Surgical AI', 'Education and Training AI', 'Research and Clinical Trial AI', 'Medical Imaging AI', 'Clinical Documentation AI', 'Operational and Administrative Automation', 'Predictive Analytics']",
    "Category": "Professional Medical Organization",
    "predicted_specialty": "surgery, oncology, cardiology, pathology, psychiatry, neurology",
    "Year": 2019,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.ama-assn.org/system/files/i23-clrpd-reports.pdf",
    "AI Applications": "['Clinical Documentation AI', 'Patient-facing AI', 'Predictive Analytics', 'Operational and Administrative Automation', 'Clinical Decision Support', 'Medical Imaging AI', 'Education and Training AI', 'Research and Clinical Trial AI']",
    "Category": "Professional Medical Organization",
    "predicted_specialty": "unclassified",
    "Year": 2023,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent",
    "State": ""
  },
  {
    "URL": "https://www.ama-assn.org/system/files/clrpd-report-generative-ai.pdf",
    "AI Applications": "['Clinical Documentation AI', 'Education and Training AI', 'Patient-facing AI', 'Operational and Administrative Automation', 'Public Health AI', 'Clinical Decision Support', 'Medical Imaging AI', 'Research and Clinical Trial AI']",
    "Category": "Professional Medical Organization",
    "predicted_specialty": "unclassified",
    "Year": 2024,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.ama-assn.org/system/files/2019-08/ai-2019-board-report.pdf",
    "AI Applications": "['Education and Training AI', 'Operational and Administrative Automation', 'Robotics and Surgical AI', 'Public Health AI', 'Clinical Documentation AI', 'Medical Imaging AI', 'Research and Clinical Trial AI']",
    "Category": "Professional Medical Organization",
    "predicted_specialty": "unclassified",
    "Year": 2019,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://journalofethics.ama-assn.org/sites/joedb/files/2023-07/joe-2308_0.pdf",
    "AI Applications": "['Robotics and Surgical AI']",
    "Category": "Professional Medical Organization",
    "predicted_specialty": "surgery, oncology, cardiology, gastroenterology, pediatrics",
    "Year": 2023,
    "Focus Areas": "Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://journalofethics.ama-assn.org/sites/journalofethics.ama-assn.org/files/2023-07/msoc2-peer-2308_0.pdf",
    "AI Applications": [],
    "Category": "Professional Medical Organization",
    "predicted_specialty": "surgery",
    "Year": 2023,
    "Focus Areas": "Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.himss.org/sites/hde/files/media/file/2023/08/11/stanford-medicine-himss-davies-2023-machine-learning-enabled-advance-care-planning-final.pdf",
    "AI Applications": [],
    "Category": "Professional Medical Organization",
    "predicted_specialty": "oncology",
    "Year": 2023,
    "Focus Areas": "Reliability and Performance, Transparency and Explainability",
    "State": ""
  },
  {
    "URL": "https://www.aha.org/system/files/media/file/2020/02/GEHC-Whitepaper_AutomatingRadiologyWorkflows.pdf",
    "AI Applications": "['Clinical Decision Support', 'Medical Imaging AI']",
    "Category": "Professional Medical Organization",
    "predicted_specialty": "radiology",
    "Year": 2019,
    "Focus Areas": "Reliability and Performance, Transparency and Explainability, Safety and Risk Management",
    "State": ""
  },
  {
    "URL": "https://aspe.hhs.gov/sites/default/files/documents/81a8cb6b6ab60c70528c229dd42ef5f6/PTAC-Specialty-Integration-RTS.pdf",
    "AI Applications": [],
    "Category": "Federal",
    "predicted_specialty": "gastroenterology",
    "Year": 2023,
    "Focus Areas": "Reliability and Performance, Privacy and Security, Safety and Risk Management",
    "State": ""
  },
  {
    "URL": "https://aspe.hhs.gov/sites/default/files/documents/d1a5deb42621082b510268d253037d08/PTAC-TCOC-Escan-Suppl.pdf",
    "AI Applications": [],
    "Category": "Federal",
    "predicted_specialty": "surgery, oncology, cardiology, gastroenterology, endocrinology, nephrology, neurology, infectious_diseases",
    "Year": 2022,
    "Focus Areas": "Reliability and Performance, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://aspe.hhs.gov/sites/default/files/documents/c3430d539a1463924ddb515151759d38/PTAC-Jun-11-LS2-Slides.pdf",
    "AI Applications": [],
    "Category": "Federal",
    "predicted_specialty": "oncology, nephrology",
    "Year": 2016,
    "Focus Areas": "Reliability and Performance, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://aspe.hhs.gov/sites/default/files/documents/22d9fef79cf262e288ccbea67622e36a/PTAC-Mar-25-SME-Slides.pdf",
    "AI Applications": [],
    "Category": "Federal",
    "predicted_specialty": "oncology",
    "Year": "",
    "Focus Areas": "Reliability and Performance",
    "State": ""
  },
  {
    "URL": "https://www.healthit.gov/sites/default/files/topiclanding/2025-01/5.%20Organizational%20Responsibilities%20Final.pdf",
    "AI Applications": "['Clinical Documentation AI']",
    "Category": "Federal",
    "predicted_specialty": "unclassified",
    "Year": 2024,
    "Focus Areas": "Bias and Fairness, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management",
    "State": ""
  },
  {
    "URL": "https://www.healthit.gov/sites/default/files/topiclanding/2025-01/4.%20High%20Priorities%20Final.pdf",
    "AI Applications": [],
    "Category": "Federal",
    "predicted_specialty": "unclassified",
    "Year": 2024,
    "Focus Areas": "Bias and Fairness, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management",
    "State": ""
  },
  {
    "URL": "https://ecqi.healthit.gov/sites/default/files/dQMStrategicRoadmapExecSummarySlides_032022.pdf",
    "AI Applications": [],
    "Category": "Federal",
    "predicted_specialty": "unclassified",
    "Year": 2020,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.healthit.gov/sites/default/files/facas/2022-03-10-Irene_Dankwa-Mullan_Presentation_508.pdf",
    "AI Applications": [],
    "Category": "Federal",
    "predicted_specialty": "unclassified",
    "Year": 2022,
    "Focus Areas": "Bias and Fairness, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://repository.niddk.nih.gov/pdf/NIDDKCR_FAIR%20and%20AI-Ready%20Data%20Sharing%20Webinar_20250529.pdf",
    "AI Applications": "['Research and Clinical Trial AI']",
    "Category": "Federal",
    "predicted_specialty": "unclassified",
    "Year": 2025,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Transparency and Explainability, Ethics and Consent",
    "State": ""
  },
  {
    "URL": "https://www.ncbi.nlm.nih.gov/books/NBK595228/pdf/Bookshelf_NBK595228.pdf",
    "AI Applications": [],
    "Category": "Federal",
    "predicted_specialty": "surgery, cardiology, psychiatry, infectious_diseases",
    "Year": 2022,
    "Focus Areas": "Bias and Fairness, Privacy and Security, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://oir.nih.gov/system/files/media/file/2025-01/guidelines-conduct_research.pdf",
    "AI Applications": [],
    "Category": "Federal",
    "predicted_specialty": "radiology, infectious_diseases",
    "Year": 2023,
    "Focus Areas": "Bias and Fairness, Privacy and Security, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://irp.nih.gov/system/files/media/file/2025-05/v33i3_nih-catalyst_may-june-2025_20pages_final_lowres.pdf",
    "AI Applications": "['Medical Imaging AI']",
    "Category": "Federal",
    "predicted_specialty": "oncology, radiology, pathology, gastroenterology, endocrinology, pediatrics, ophthalmology, neurology",
    "Year": 2025,
    "Focus Areas": "Reliability and Performance, Transparency and Explainability, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.imagwiki.nibib.nih.gov/sites/default/files/Standards_ANSI-CTA-2090_0.pdf",
    "AI Applications": "['Public Health AI', 'Patient-facing AI', 'Clinical Documentation AI', 'Medical Imaging AI', 'Operational and Administrative Automation', 'Robotics and Surgical AI', 'Education and Training AI', 'Clinical Decision Support', 'Research and Clinical Trial AI']",
    "Category": "Federal",
    "predicted_specialty": "unclassified",
    "Year": 2090,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://digirepo.nlm.nih.gov/master/borndig/9918645975406676/9918645975406676.pdf",
    "AI Applications": "['Patient-facing AI']",
    "Category": "Federal",
    "predicted_specialty": "psychiatry, infectious_diseases",
    "Year": 2021,
    "Focus Areas": "Reliability and Performance, Privacy and Security, Safety and Risk Management",
    "State": ""
  },
  {
    "URL": "https://seed.nih.gov/sites/default/files/2023-09/Device-Regulatory-Case-Study-1.pdf",
    "AI Applications": [],
    "Category": "Federal",
    "predicted_specialty": "radiology, gastroenterology",
    "Year": "",
    "Focus Areas": "Reliability and Performance, Transparency and Explainability, Safety and Risk Management",
    "State": ""
  },
  {
    "URL": "https://www.ncbi.nlm.nih.gov/books/NBK586301/pdf/Bookshelf_NBK586301.pdf",
    "AI Applications": "['Patient-facing AI']",
    "Category": "Federal",
    "predicted_specialty": "Obstetrics_Gynecology, oncology, radiology, pathology, infectious_diseases",
    "Year": 2023,
    "Focus Areas": "Reliability and Performance, Ethics and Consent, Safety and Risk Management",
    "State": ""
  },
  {
    "URL": "https://nvlpubs.nist.gov/nistpubs/ir/2023/NIST.IR.8432.ipd.pdf",
    "AI Applications": [],
    "Category": "Federal",
    "predicted_specialty": "pathology",
    "Year": 2023,
    "Focus Areas": "Bias and Fairness, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.cms.gov/files/document/hiig-august-2023-isc-speaker-slides.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "unclassified",
    "Year": 2023,
    "Focus Areas": "Reliability and Performance, Safety and Risk Management",
    "State": ""
  },
  {
    "URL": "https://www.cms.gov/files/document/improving-technology-empower-medicare-beneficiaries-rfi-qa-call-may-20th-2025.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "unclassified",
    "Year": 2025,
    "Focus Areas": "Reliability and Performance, Privacy and Security",
    "State": ""
  },
  {
    "URL": "https://www.cms.gov/files/document/hfpp-white-paper-exploring-fraud-waste-abuse-within-telehealth.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "infectious_diseases",
    "Year": "",
    "Focus Areas": "Reliability and Performance, Privacy and Security, Ethics and Consent, Safety and Risk Management",
    "State": ""
  },
  {
    "URL": "https://mh.alabama.gov/wp-content/uploads/2023/07/10.-DDD-Operational-Guidelines-Manual-April-10-2023.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "pulmonology, psychiatry, neurology, infectious_diseases",
    "Year": 2023,
    "Focus Areas": "Reliability and Performance, Privacy and Security, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": "Alabama"
  },
  {
    "URL": "https://bhsoac.ca.gov/wp-content/uploads/MHSOAC_FSP_Presentation_05232024.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "psychiatry",
    "Year": 2024,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Safety and Risk Management, Governance Committees",
    "State": "California"
  },
  {
    "URL": "https://www.cdii.ca.gov/wp-content/uploads/2025/02/CalHHS_DxF-Roadmap_Main-Document.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "unclassified",
    "Year": 2025,
    "Focus Areas": "Bias and Fairness, Privacy and Security, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": "California"
  },
  {
    "URL": "https://cppa.ca.gov/meetings/materials/20240522_transcript.pdf",
    "AI Applications": "['Patient-facing AI']",
    "Category": "State",
    "predicted_specialty": "unclassified",
    "Year": 2024,
    "Focus Areas": "Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": "California"
  },
  {
    "URL": "https://ahca.myflorida.com/fhin/content/download/20473/file/AHCA_2021_Health_IT_Environmental_Scan_February_2022.pdf",
    "AI Applications": [],
    "Category": "Professional Medical Organization",
    "predicted_specialty": "psychiatry, infectious_diseases",
    "Year": 2021,
    "Focus Areas": "Reliability and Performance, Privacy and Security, Ethics and Consent, Safety and Risk Management",
    "State": "Florida"
  },
  {
    "URL": "https://dbhdd.georgia.gov/sites/dbhdd.georgia.gov/files/related_files/site_page/A%20%20Community%20Transitions%20from%20State%20Hospitals%20Manual%209-19-16.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "psychiatry",
    "Year": 2016,
    "Focus Areas": "Reliability and Performance, Privacy and Security, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": "Georgia"
  },
  {
    "URL": "https://medquest.hawaii.gov/content/dam/formsanddocuments/med-quest/section-1115-demonstration-renewal-for-2024/HI%20Section%201115%20Application%202.1.2024%20-%20Attachment%20I%20-%20Summary%20of%20Public%20Comments%20and%20Questions%20from%20Two%20Public%20Hearings.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "oncology, cardiology, pulmonology, psychiatry, infectious_diseases",
    "Year": 2023,
    "Focus Areas": "Reliability and Performance, Privacy and Security, Safety and Risk Management, Governance Committees",
    "State": "Hawaii"
  },
  {
    "URL": "https://hfs.illinois.gov/content/dam/soi/en/web/hfs/sitecollectiondocuments/illinoishitsmhpu2021final50.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "psychiatry",
    "Year": 2022,
    "Focus Areas": "Reliability and Performance, Privacy and Security, Safety and Risk Management, Governance Committees",
    "State": "Illinois"
  },
  {
    "URL": "https://www.in.gov/health/files/Care_Coordination_Measures_Atlas.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "unclassified",
    "Year": 2011,
    "Focus Areas": "Reliability and Performance, Privacy and Security, Safety and Risk Management",
    "State": "Indiana"
  },
  {
    "URL": "https://finance.ky.gov/eProcurement/PassportResponse/C.10%20Utilization%20Management.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "oncology, psychiatry, infectious_diseases",
    "Year": 2019,
    "Focus Areas": "Reliability and Performance, Privacy and Security, Ethics and Consent, Safety and Risk Management",
    "State": "Kentucky"
  },
  {
    "URL": "https://finance.ky.gov/eProcurement/MolinaResponse/I.C.10%20Utilization%20Management.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "unclassified",
    "Year": 2020,
    "Focus Areas": "Reliability and Performance, Privacy and Security, Safety and Risk Management",
    "State": "Kentucky"
  },
  {
    "URL": "https://finance.ky.gov/eProcurement/HumanaResponse/133_I_C_18_Provider%20Network_PROPRIETARY.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "psychiatry, Obstetrics_Gynecology",
    "Year": "",
    "Focus Areas": "Reliability and Performance, Privacy and Security, Safety and Risk Management",
    "State": "Kentucky"
  },
  {
    "URL": "https://finance.ky.gov/eProcurement/HumanaResponse/98_I_C_10_Utilization%20Management_PROPRIETARY.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "unclassified",
    "Year": "",
    "Focus Areas": "Reliability and Performance, Privacy and Security, Safety and Risk Management",
    "State": "Kentucky"
  },
  {
    "URL": "https://finance.ky.gov/eProcurement/PassportResponse/A%20Executive%20Summary.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "unclassified",
    "Year": "",
    "Focus Areas": "Reliability and Performance, Privacy and Security, Safety and Risk Management, Governance Committees",
    "State": "Kentucky"
  },
  {
    "URL": "https://finance.ky.gov/eProcurement/UnitedHealthcareResponse/080.%2021.%20Pharmacy%20Benefits.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "unclassified",
    "Year": 2018,
    "Focus Areas": "Reliability and Performance, Privacy and Security, Safety and Risk Management, Governance Committees",
    "State": "Kentucky"
  },
  {
    "URL": "https://finance.ky.gov/eProcurement/MolinaResponse/I.C.06%20Management%20Information%20System.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "unclassified",
    "Year": 2020,
    "Focus Areas": "Reliability and Performance, Privacy and Security, Safety and Risk Management, Governance Committees",
    "State": "Kentucky"
  },
  {
    "URL": "https://mhcc.maryland.gov/mhcc/pages/apc/apc/documents/apc_milbank_2024_scorecard_rpt.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "psychiatry, infectious_diseases",
    "Year": 2021,
    "Focus Areas": "Reliability and Performance, Safety and Risk Management",
    "State": "Maryland"
  },
  {
    "URL": "https://mhcc.maryland.gov/mhcc/pages/home/meeting_schedule/documents/updates/2024/updt_20240321.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "surgery",
    "Year": 2024,
    "Focus Areas": "Reliability and Performance, Privacy and Security, Safety and Risk Management, Governance Committees",
    "State": "Maryland"
  },
  {
    "URL": "https://www.michigan.gov/mdhhs/-/media/Project/Websites/mdhhs/Inside-MDHHS/Policy-and-Planning/Social-Determinants-of-Health-Strategy/CIE/CIE-TF-Final-Report-FINAL-08092023.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "unclassified",
    "Year": 2023,
    "Focus Areas": "Bias and Fairness, Privacy and Security, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": "Michigan"
  },
  {
    "URL": "https://www.lbo.ms.gov/misc/strategic/FY25/328-00-plan.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "unclassified",
    "Year": 2029,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Safety and Risk Management, Governance Committees",
    "State": "Mississippi"
  },
  {
    "URL": "https://dhcfp.nv.gov/uploadedFiles/dhcfpnvgov/content/Resources/AdminSupport/Reports/HPN_NVSFY2021_MCO_Compliance_Report_F1.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "psychiatry",
    "Year": 2021,
    "Focus Areas": "Reliability and Performance, Privacy and Security, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": "Nevada"
  },
  {
    "URL": "https://www.health.ny.gov/health_care/medicaid/redesign/dsrip/docs/2020_pps_profile_rpt_final.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "endocrinology, pulmonology, psychiatry",
    "Year": 2020,
    "Focus Areas": "Reliability and Performance, Privacy and Security, Safety and Risk Management",
    "State": "New York"
  },
  {
    "URL": "https://www.health.ny.gov/commissioner/grand_rounds/behavioral_health/docs/chung.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "psychiatry",
    "Year": "",
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Safety and Risk Management",
    "State": "New York"
  },
  {
    "URL": "https://www.oregon.gov/oha/HPA/OHIT-HITOC/Documents/DRAFT_OregonStrategicPlanforHealthIT2024-2028.pdf",
    "AI Applications": "['Clinical Documentation AI', 'Operational and Administrative Automation', 'Education and Training AI']",
    "Category": "State",
    "predicted_specialty": "unclassified",
    "Year": 2024,
    "Focus Areas": "Bias and Fairness, Privacy and Security, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": "Oregon"
  },
  {
    "URL": "https://www.oregon.gov/oha/HPA/HP/HCMOPageDocs/046-HCMO-1-Notice-of-Material-Change-Transaction.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "surgery",
    "Year": 2024,
    "Focus Areas": "Reliability and Performance, Privacy and Security, Safety and Risk Management, Governance Committees",
    "State": "Oregon"
  },
  {
    "URL": "https://watech.wa.gov/sites/default/files/2024-07/Ethical%20Considerations%20in%20the%20use%20of%20Artificial%20Intelligence%20in%20Healthcare%2C%20and%20Washington%27s%20approach%20to%20Generative%20AI.pdf",
    "AI Applications": "['Clinical Decision Support', 'Clinical Documentation AI', 'Medical Imaging AI', 'Operational and Administrative Automation', 'Education and Training AI', 'Patient-facing AI', 'Public Health AI', 'Research and Clinical Trial AI']",
    "Category": "State",
    "predicted_specialty": "unclassified",
    "Year": 2024,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": "Washington"
  },
  {
    "URL": "https://www.dhs.wisconsin.gov/wltcac/handout-20180710-03.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "surgery, pulmonology, psychiatry, neurology",
    "Year": 2018,
    "Focus Areas": "Reliability and Performance, Privacy and Security, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": "Wisconsin"
  },
  {
    "URL": "https://www.mha.org/wp-content/uploads/2024/12/AI-Framework-for-Healthcare_MHA-AI-Taskforce.pdf",
    "AI Applications": "['Research and Clinical Trial AI', 'Clinical Decision Support', 'Clinical Documentation AI', 'Education and Training AI', 'Medical Imaging AI', 'Operational and Administrative Automation', 'Patient-facing AI', 'Robotics and Surgical AI', 'Public Health AI']",
    "Category": "Professional Medical Organization",
    "predicted_specialty": "unclassified",
    "Year": "",
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.medrxiv.org/content/10.1101/2023.01.21.23284858v1.full.pdf",
    "AI Applications": "['Research and Clinical Trial AI', 'Clinical Decision Support']",
    "Category": "Academic Institution",
    "predicted_specialty": "unclassified",
    "Year": 2023,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.aha.org/system/files/media/file/2021/04/3M-HIS-Key-advantages-of-3M-MModal-CAPD-fact-sheet.pdf",
    "AI Applications": "['Clinical Documentation AI']",
    "Category": "Professional Medical Organization",
    "predicted_specialty": "unclassified",
    "Year": 2020,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security",
    "State": ""
  },
  {
    "URL": "https://escholarship.org/content/qt92r82879/qt92r82879.pdf",
    "AI Applications": "['Clinical Decision Support', 'Clinical Documentation AI', 'Research and Clinical Trial AI', 'Operational and Administrative Automation', 'Patient-facing AI', 'Education and Training AI', 'Public Health AI', 'Predictive Analytics', 'Medical Imaging AI']",
    "Category": "Academic Institution",
    "predicted_specialty": "unclassified",
    "Year": 2024,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://medvixpublications.org/get/1-JMCHR2025091590I%20Galley%20Proof-1747466564.pdf",
    "AI Applications": "['Clinical Decision Support', 'Patient-facing AI', 'Research and Clinical Trial AI', 'Education and Training AI', 'Medical Imaging AI', 'Robotics and Surgical AI', 'Public Health AI', 'Clinical Documentation AI', 'Operational and Administrative Automation', 'Predictive Analytics']",
    "Category": "Academic Institution",
    "predicted_specialty": "unclassified",
    "Year": 2025,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Transparency and Explainability, Ethics and Consent, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://digitalcollections.ohsu.edu/record/44678/files/San.Shanya.2025.pdf",
    "AI Applications": "['Clinical Decision Support', 'Research and Clinical Trial AI', 'Predictive Analytics', 'Public Health AI', 'Medical Imaging AI', 'Clinical Documentation AI', 'Education and Training AI']",
    "Category": "Academic Institution",
    "predicted_specialty": "unclassified",
    "Year": 2025,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://healthpolicy.duke.edu/sites/default/files/2024-10/AI%20Governance%20in%20Health%20Systems.pdf",
    "AI Applications": "['Clinical Documentation AI', 'Operational and Administrative Automation', 'Patient-facing AI', 'Education and Training AI']",
    "Category": "Academic Institution",
    "predicted_specialty": "unclassified",
    "Year": 2024,
    "Focus Areas": "Bias and Fairness, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://med.stanford.edu/content/dam/sm/healthcare-ai/images/Smith_et_al-2021-Journal_of_General_Internal_Medicine.pdf",
    "AI Applications": "['Education and Training AI', 'Clinical Documentation AI']",
    "Category": "Academic Institution",
    "predicted_specialty": "unclassified",
    "Year": 2020,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://wjarr.com/sites/default/files/WJARR-2024-4041.pdf",
    "AI Applications": "['Clinical Decision Support', 'Clinical Documentation AI', 'Medical Imaging AI', 'Operational and Administrative Automation', 'Patient-facing AI', 'Robotics and Surgical AI', 'Education and Training AI', 'Research and Clinical Trial AI', 'Predictive Analytics', 'Public Health AI']",
    "Category": "Professional Medical Organization",
    "predicted_specialty": "surgery, oncology, cardiology",
    "Year": 2024,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.nature.com/articles/s41746-025-01700-4.pdf",
    "AI Applications": "['Clinical Documentation AI', 'Medical Imaging AI', 'Operational and Administrative Automation', 'Patient-facing AI', 'Robotics and Surgical AI', 'Education and Training AI', 'Research and Clinical Trial AI', 'Public Health AI']",
    "Category": "Professional Medical Organization",
    "predicted_specialty": "unclassified",
    "Year": 2025,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.cureus.com/articles/244463-ai-driven-clinical-decision-support-systems-an-ongoing-pursuit-of-potential.pdf",
    "AI Applications": "['Clinical Decision Support', 'Medical Imaging AI', 'Predictive Analytics', 'Research and Clinical Trial AI', 'Clinical Documentation AI', 'Education and Training AI', 'Operational and Administrative Automation', 'Patient-facing AI', 'Public Health AI']",
    "Category": "Professional Medical Organization",
    "predicted_specialty": "unclassified",
    "Year": 2024,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Transparency and Explainability, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.cureus.com/articles/245055-embracing-artificial-intelligence-revolutionizing-nursing-documentation-for-a-better-future.pdf",
    "AI Applications": "['Clinical Documentation AI', 'Operational and Administrative Automation', 'Patient-facing AI', 'Education and Training AI']",
    "Category": "Professional Medical Organization",
    "predicted_specialty": "unclassified",
    "Year": 2024,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.ahima.org/media/zxgl0cal/ahima-privacy-and-security-rfi-response-1.pdf",
    "AI Applications": "['Clinical Documentation AI', 'Operational and Administrative Automation', 'Research and Clinical Trial AI']",
    "Category": "Professional Medical Organization",
    "predicted_specialty": "unclassified",
    "Year": 2025,
    "Focus Areas": "Bias and Fairness, Privacy and Security, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.ahima.org/media/xxvm1vdz/ahima-comments-cms-fy-26-ipps-proposed-rule-final.pdf",
    "AI Applications": "['Education and Training AI']",
    "Category": "Nonprofit",
    "predicted_specialty": "unclassified",
    "Year": 2025,
    "Focus Areas": "Bias and Fairness, Privacy and Security, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.ama-assn.org/system/files/future-health-case-study-hattiesburg-clinic.pdf",
    "AI Applications": [],
    "Category": "Professional Medical Organization",
    "predicted_specialty": "unclassified",
    "Year": 2023,
    "Focus Areas": "Reliability and Performance, Safety and Risk Management",
    "State": ""
  },
  {
    "URL": "https://searchlf.ama-assn.org/letter/documentDownload?uri=/unstructured/binary/letter/LETTERS/lfa.zip/2025-6-10-Letter-to-Oz-re-CMS-Deregulation-RFI-v2.pdf",
    "AI Applications": [],
    "Category": "Professional Medical Organization",
    "predicted_specialty": "unclassified",
    "Year": 2024,
    "Focus Areas": "Reliability and Performance, Privacy and Security, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.ama-assn.org/system/files/future-health-case-study-geisinger.pdf",
    "AI Applications": "['Predictive Analytics', 'Public Health AI', 'Operational and Administrative Automation', 'Patient-facing AI']",
    "Category": "Professional Medical Organization",
    "predicted_specialty": "pulmonology",
    "Year": "",
    "Focus Areas": "Reliability and Performance, Transparency and Explainability",
    "State": ""
  },
  {
    "URL": "https://www.ama-assn.org/sites/ama-assn.org/files/corp/media-browser/public/hod/a18-clrpd-reports.pdf",
    "AI Applications": "['Public Health AI', 'Operational and Administrative Automation', 'Clinical Documentation AI', 'Patient-facing AI', 'Education and Training AI']",
    "Category": "Professional Medical Organization",
    "predicted_specialty": "oncology",
    "Year": 2018,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://brand.amia.org/m/dbde97860f393e1/original/25x5-Summary-Report.pdf",
    "AI Applications": "['Clinical Documentation AI']",
    "Category": "Professional Medical Organization",
    "predicted_specialty": "unclassified",
    "Year": 2021,
    "Focus Areas": "Bias and Fairness, Reliability and Performance",
    "State": ""
  },
  {
    "URL": "https://legacy.himss.org/sites/hde/files/media/file/2023/08/11/stanford-medicine-himss-davies-2023-clinical-deterioration-prevention-with-ai-final.pdf",
    "AI Applications": "['Predictive Analytics']",
    "Category": "Academic Institution",
    "predicted_specialty": "unclassified",
    "Year": 2023,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Transparency and Explainability, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://gkc.himss.org/sites/hde/files/media/file/2023/06/16/2.-stemi-davies-award_061423guanwangban.pdf",
    "AI Applications": "['Patient-facing AI']",
    "Category": "Professional Medical Organization",
    "predicted_specialty": "cardiology",
    "Year": 2023,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Transparency and Explainability, Ethics and Consent, Safety and Risk Management",
    "State": ""
  },
  {
    "URL": "https://gkc.himss.org/sites/hde/files/media/file/2024/09/25/sepsis-case-study.pdf",
    "AI Applications": [],
    "Category": "Professional Medical Organization",
    "predicted_specialty": "infectious_diseases",
    "Year": 2022,
    "Focus Areas": "Reliability and Performance, Privacy and Security, Transparency and Explainability, Safety and Risk Management",
    "State": ""
  },
  {
    "URL": "https://gkc.himss.org/sites/hde/files/2025-04/himss-ai-rfi-response-feb-2025-final-.pdf",
    "AI Applications": "['Public Health AI']",
    "Category": "Nonprofit",
    "predicted_specialty": "unclassified",
    "Year": 2025,
    "Focus Areas": "Bias and Fairness, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.himss.org/sites/hde/files/handout-140_8.pdf",
    "AI Applications": [],
    "Category": "Professional Medical Organization",
    "predicted_specialty": "unclassified",
    "Year": 2021,
    "Focus Areas": "Reliability and Performance, Privacy and Security, Safety and Risk Management",
    "State": ""
  },
  {
    "URL": "https://gkc.himss.org/sites/hde/files/media/file/2023/08/24/himss-davies-award-copd-case-study-intermountain-health-final.pdf",
    "AI Applications": [],
    "Category": "Professional Medical Organization",
    "predicted_specialty": "pulmonology",
    "Year": 2023,
    "Focus Areas": "Reliability and Performance, Ethics and Consent, Safety and Risk Management",
    "State": ""
  },
  {
    "URL": "https://www.aha.org/sites/default/files/2018-06/Leveraging%20Technology%20to%20Drive%20Population%20Health%20Webinar%20Slides_0.pdf",
    "AI Applications": [],
    "Category": "Professional Medical Organization",
    "predicted_specialty": "unclassified",
    "Year": 2018,
    "Focus Areas": "Reliability and Performance, Privacy and Security, Safety and Risk Management",
    "State": ""
  },
  {
    "URL": "https://www.aha.org/system/files/media/file/2022/03/3M_ClinicalDocumentation_exedialogue_030722.pdf",
    "AI Applications": "['Clinical Documentation AI', 'Operational and Administrative Automation']",
    "Category": "Professional Medical Organization",
    "predicted_specialty": "unclassified",
    "Year": 2022,
    "Focus Areas": "Reliability and Performance",
    "State": ""
  },
  {
    "URL": "https://www.aha.org/system/files/media/file/2023/11/2024_AHA_Health_Care_Workforce_Scan.pdf",
    "AI Applications": "['Clinical Documentation AI', 'Operational and Administrative Automation', 'Education and Training AI', 'Patient-facing AI']",
    "Category": "Professional Medical Organization",
    "predicted_specialty": "infectious_diseases",
    "Year": 2024,
    "Focus Areas": "Reliability and Performance, Privacy and Security, Safety and Risk Management",
    "State": ""
  },
  {
    "URL": "https://www.aha.org/system/files/media/file/2023/07/TeamBasedCareWhitePaper.pdf",
    "AI Applications": [],
    "Category": "Professional Medical Organization",
    "predicted_specialty": "psychiatry, infectious_diseases",
    "Year": 2022,
    "Focus Areas": "Bias and Fairness, Privacy and Security, Ethics and Consent, Safety and Risk Management",
    "State": ""
  },
  {
    "URL": "https://www.aha.org/system/files/media/file/2024/01/2024-Advocacy-Agenda-20240116.pdf",
    "AI Applications": [],
    "Category": "Professional Medical Organization",
    "predicted_specialty": "unclassified",
    "Year": 2024,
    "Focus Areas": "Bias and Fairness, Privacy and Security, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.ihi.org/sites/default/files/IHI_NPSF_Closing_the_Loop_Referral_Management_in_EHR.pdf",
    "AI Applications": [],
    "Category": "Professional Medical Organization",
    "predicted_specialty": "unclassified",
    "Year": 2017,
    "Focus Areas": "Reliability and Performance, Privacy and Security, Ethics and Consent, Safety and Risk Management",
    "State": ""
  },
  {
    "URL": "https://www.accessdata.fda.gov/cdrh_docs/pdf21/K210719.pdf",
    "AI Applications": "['Medical Imaging AI']",
    "Category": "Federal",
    "predicted_specialty": "unclassified",
    "Year": 2021,
    "Focus Areas": "Reliability and Performance, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.cms.hhs.gov/manuals/downloads/clm104c12.pdf",
    "AI Applications": [],
    "Category": "Federal",
    "predicted_specialty": "surgery, oncology, radiology, cardiology, pathology, gastroenterology, nephrology, psychiatry, neurology",
    "Year": 2024,
    "Focus Areas": "Reliability and Performance, Privacy and Security, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.cms.hhs.gov/transmittals/downloads/R1875CP.pdf",
    "AI Applications": [],
    "Category": "Federal",
    "predicted_specialty": "surgery",
    "Year": 2010,
    "Focus Areas": "Reliability and Performance, Privacy and Security, Ethics and Consent, Safety and Risk Management",
    "State": ""
  },
  {
    "URL": "https://files.asprtracie.hhs.gov/documents/aspr-tracie-mass-casualty-triage-final-508.pdf",
    "AI Applications": [],
    "Category": "Federal",
    "predicted_specialty": "surgery, pediatrics",
    "Year": 2019,
    "Focus Areas": "Reliability and Performance, Privacy and Security, Ethics and Consent, Safety and Risk Management",
    "State": ""
  },
  {
    "URL": "https://www.cms.hhs.gov/transmittals/downloads/R2282CP.pdf",
    "AI Applications": [],
    "Category": "Federal",
    "predicted_specialty": "surgery",
    "Year": 2011,
    "Focus Areas": "Reliability and Performance, Privacy and Security, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.healthit.gov/sites/default/files/page/2023-02/2022_ONC_Report_to_Congress.pdf",
    "AI Applications": [],
    "Category": "Federal",
    "predicted_specialty": "infectious_diseases",
    "Year": 2009,
    "Focus Areas": "Bias and Fairness, Privacy and Security, Ethics and Consent, Safety and Risk Management",
    "State": ""
  },
  {
    "URL": "https://www.healthit.gov/sites/default/files/pdf/privacy/privacy-and-security-guide.pdf",
    "AI Applications": [],
    "Category": "Federal",
    "predicted_specialty": "psychiatry",
    "Year": 2015,
    "Focus Areas": "Privacy and Security, Ethics and Consent, Safety and Risk Management",
    "State": ""
  },
  {
    "URL": "https://www.healthit.gov/sites/default/files/topiclanding/2025-01/2.%20Contingency%20Planning%20Final.pdf",
    "AI Applications": [],
    "Category": "Federal",
    "predicted_specialty": "unclassified",
    "Year": 2024,
    "Focus Areas": "Bias and Fairness, Privacy and Security, Ethics and Consent, Safety and Risk Management",
    "State": ""
  },
  {
    "URL": "https://www.healthit.gov/sites/default/files/safer/guides/safer_system_interfaces.pdf",
    "AI Applications": [],
    "Category": "Federal",
    "predicted_specialty": "unclassified",
    "Year": 2016,
    "Focus Areas": "Bias and Fairness, Privacy and Security, Ethics and Consent, Safety and Risk Management",
    "State": ""
  },
  {
    "URL": "https://www.healthit.gov/sites/default/files/page/2021-08/2021-07-14_PHDS_TF_2021_HITAC%20Recommendations%20Report_Signed_508_0.pdf",
    "AI Applications": [],
    "Category": "Federal",
    "predicted_specialty": "infectious_diseases",
    "Year": 2021,
    "Focus Areas": "Bias and Fairness, Privacy and Security, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.nichd.nih.gov/sites/default/files/inline-files/Governance_Metadata_Standards_FINAL_revb.pdf",
    "AI Applications": [],
    "Category": "Federal",
    "predicted_specialty": "oncology, nephrology, pediatrics",
    "Year": 2024,
    "Focus Areas": "Bias and Fairness, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.nist.gov/system/files/documents/2024/02/16/ID048%20-%202024-02-03%2C%20Loughborough%20University%2C%20Comments%20on%20AI%20EO%20RFI.pdf",
    "AI Applications": [],
    "Category": "Federal",
    "predicted_specialty": "unclassified",
    "Year": "",
    "Focus Areas": "Bias and Fairness, Privacy and Security, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.cms.gov/files/document/r11842cp.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "surgery",
    "Year": 2023,
    "Focus Areas": "Reliability and Performance, Privacy and Security, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.cms.gov/manuals/downloads/clm104C12.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "surgery, oncology, radiology, cardiology, pathology, gastroenterology, nephrology, psychiatry, neurology",
    "Year": 2024,
    "Focus Areas": "Reliability and Performance, Privacy and Security, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.cms.gov/Regulations-and-Guidance/Guidance/Transmittals/downloads/r1875cp.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "surgery",
    "Year": 2010,
    "Focus Areas": "Reliability and Performance, Privacy and Security, Ethics and Consent, Safety and Risk Management",
    "State": ""
  },
  {
    "URL": "https://www.cms.gov/files/document/r11288cp.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "surgery",
    "Year": 2022,
    "Focus Areas": "Reliability and Performance, Privacy and Security, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.cms.gov/Regulations-and-Guidance/Guidance/Transmittals/downloads/R2282CP.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "surgery",
    "Year": 2011,
    "Focus Areas": "Reliability and Performance, Privacy and Security, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://doc.alabama.gov/docs/AdminRegs/AR303.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "unclassified",
    "Year": 2024,
    "Focus Areas": "Privacy and Security, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": "Alabama"
  },
  {
    "URL": "https://sjud.senate.ca.gov/system/files/2025-04/sb-813-mcnerney-sjud-analysis.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "unclassified",
    "Year": 2025,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": "California"
  },
  {
    "URL": "https://apcp.assembly.ca.gov/system/files/2025-04/ab-979-irwin-apcp-analyses.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "unclassified",
    "Year": 2025,
    "Focus Areas": "Bias and Fairness, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": "California"
  },
  {
    "URL": "https://www.dhcs.ca.gov/CalAIM/Documents/BH-CONNECT/BH-Connect-STCs.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "psychiatry, infectious_diseases",
    "Year": 2025,
    "Focus Areas": "Reliability and Performance, Privacy and Security, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": "California"
  },
  {
    "URL": "https://dhss.delaware.gov/wp-content/uploads/sites/10/dph/pdf/hospitaldiversionpolicy2013.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "cardiology",
    "Year": 2013,
    "Focus Areas": "Reliability and Performance, Privacy and Security, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": "Delaware"
  },
  {
    "URL": "https://ahca.myflorida.com/medicaid/review/Reimbursement/RH_08_080701_UB-04_ver1_3.pdf",
    "AI Applications": [],
    "Category": "Professional Medical Organization",
    "predicted_specialty": "surgery, Obstetrics_Gynecology, pulmonology, nephrology, psychiatry, pediatrics",
    "Year": 2008,
    "Focus Areas": "Reliability and Performance, Privacy and Security, Safety and Risk Management, Governance Committees",
    "State": "Florida"
  },
  {
    "URL": "https://data.capitol.hawaii.gov/sessions/session2008/Bills/HB3159_.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "unclassified",
    "Year": 2007,
    "Focus Areas": "Bias and Fairness, Privacy and Security, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": "Hawaii"
  },
  {
    "URL": "https://www.in.gov/medicaid/providers/files/modules/ddrs-hcbs-waivers.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "psychiatry, neurology",
    "Year": 2014,
    "Focus Areas": "Reliability and Performance, Privacy and Security, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": "Indiana"
  },
  {
    "URL": "https://www.in.gov/fssa/thehub/files/FSSA_Privacy_Compliance.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "infectious_diseases",
    "Year": 2025,
    "Focus Areas": "Privacy and Security, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": "Indiana"
  },
  {
    "URL": "https://finance.ky.gov/eProcurement/UnitedHealthcareResponse/049.%20Att.%20C.6.a%20UnitedHealthcare%20Management%20Information%20System.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "unclassified",
    "Year": "",
    "Focus Areas": "Reliability and Performance, Privacy and Security, Safety and Risk Management",
    "State": "Kentucky"
  },
  {
    "URL": "https://www.hca.nm.gov/wp-content/uploads/BH-Manual-Introduction_Redlined-Version-10.25.24.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "psychiatry",
    "Year": 2023,
    "Focus Areas": "Reliability and Performance, Privacy and Security, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": "New Mexico"
  },
  {
    "URL": "https://www.health.ny.gov/health_care/medicaid/redesign/hcbs/docs/2023_statewide_transition_plan.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "psychiatry, neurology, infectious_diseases",
    "Year": 1915,
    "Focus Areas": "Reliability and Performance, Privacy and Security, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": "New York"
  },
  {
    "URL": "https://opwdd.ny.gov/system/files/documents/2020/01/cco-policy-manual-master_acc_1.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "unclassified",
    "Year": 2018,
    "Focus Areas": "Reliability and Performance, Privacy and Security, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": "New York"
  },
  {
    "URL": "https://dph.sc.gov/sites/scdph/files/2024-09/Updates_for_61-16_June_2024.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "surgery",
    "Year": 2024,
    "Focus Areas": "Privacy and Security, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": "South Carolina"
  },
  {
    "URL": "https://capitol.texas.gov/tlodocs/89R/billtext/pdf/HB00149F.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "unclassified",
    "Year": 2025,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": "Texas"
  },
  {
    "URL": "https://www.house.texas.gov/pdfs/committees/reports/interim/88interim/House-Select-Committee-on-Artificial-Intelligence-Emerging-Technologies.pdf",
    "AI Applications": "['Public Health AI']",
    "Category": "State",
    "predicted_specialty": "unclassified",
    "Year": 2024,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": "Texas"
  },
  {
    "URL": "https://medicaid-documents.dhhs.utah.gov/Documents/pdfs/OMH%20Quality%20Strategy.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "surgery, Obstetrics_Gynecology, endocrinology, pulmonology, psychiatry, pediatrics",
    "Year": 2025,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Safety and Risk Management, Governance Committees",
    "State": "Utah"
  },
  {
    "URL": "https://www.vita.virginia.gov/media/vitavirginiagov/it-governance/ea/pdf/Utilization-of-Artificial-Intelligence-by-COV-Policy-Standard.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "unclassified",
    "Year": 2024,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": "Virginia"
  },
  {
    "URL": "https://watech.wa.gov/sites/default/files/2024-12/Final%202024%20AI%20Task%20Force%20Report%20-%20AG.pdf",
    "AI Applications": "['Clinical Documentation AI', 'Education and Training AI', 'Operational and Administrative Automation']",
    "Category": "State",
    "predicted_specialty": "unclassified",
    "Year": 2024,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": "Washington"
  },
  {
    "URL": "https://dhhr.wv.gov/bms/Programs/WaiverPrograms/WVSWTP/Documents/20230301_STP_update.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "neurology",
    "Year": 2023,
    "Focus Areas": "Privacy and Security, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": "West Virginia"
  },
  {
    "URL": "https://www.dhs.wisconsin.gov/medicaid/2025-27-wi-medicaid-managed-care-quality-strategy.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "Obstetrics_Gynecology, oncology, cardiology, endocrinology, pulmonology, psychiatry, infectious_diseases",
    "Year": 2025,
    "Focus Areas": "Reliability and Performance, Privacy and Security, Safety and Risk Management, Governance Committees",
    "State": "Wisconsin"
  },
  {
    "URL": "https://npsb.org/wp-content/uploads/2021/11/NPSB-Technology-Blueprint-1.pdf",
    "AI Applications": "['Clinical Documentation AI', 'Operational and Administrative Automation', 'Patient-facing AI']",
    "Category": "Professional Medical Organization",
    "predicted_specialty": "infectious_diseases",
    "Year": 2021,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://rojournals.org/wp-content/uploads/2024/09/ROJPHM-P9.pdf",
    "AI Applications": "['Patient-facing AI', 'Public Health AI', 'Clinical Documentation AI', 'Medical Imaging AI', 'Operational and Administrative Automation', 'Robotics and Surgical AI', 'Education and Training AI', 'Research and Clinical Trial AI', 'Clinical Decision Support']",
    "Category": "Academic Institution",
    "predicted_specialty": "unclassified",
    "Year": 2024,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://cset.georgetown.edu/wp-content/uploads/CSET-An-Argument-for-Hybrid-AI-Incident-Reporting.pdf",
    "AI Applications": [],
    "Category": "Academic Institution",
    "predicted_specialty": "unclassified",
    "Year": 2024,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://cset.georgetown.edu/wp-content/uploads/CSET-AI-Incidents.pdf",
    "AI Applications": [],
    "Category": "Academic Institution",
    "predicted_specialty": "unclassified",
    "Year": 2025,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://qualitysafety.bmj.com/content/qhc/34/7/433.full.pdf",
    "AI Applications": "['Operational and Administrative Automation', 'Robotics and Surgical AI']",
    "Category": "Professional Medical Organization",
    "predicted_specialty": "surgery, ophthalmology",
    "Year": 2024,
    "Focus Areas": "Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://s3.ca-central-1.amazonaws.com/assets.jmir.org/assets/preprints/preprint-48156-accepted.pdf",
    "AI Applications": "['Robotics and Surgical AI']",
    "Category": "Academic Institution",
    "predicted_specialty": "unclassified",
    "Year": 2023,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://saudijournals.com/media/articles/SJMPS_97_419-423.pdf",
    "AI Applications": "['Education and Training AI', 'Clinical Decision Support', 'Medical Imaging AI', 'Operational and Administrative Automation', 'Patient-facing AI', 'Research and Clinical Trial AI', 'Public Health AI', 'Robotics and Surgical AI', 'Clinical Documentation AI', 'Predictive Analytics']",
    "Category": "Academic Institution",
    "predicted_specialty": "surgery",
    "Year": 2023,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://ijdmsrjournal.com/issue_dcp/To%20Explore%20and%20Analyze%20the%20Strategies%20to%20Improve%20Patient%20Safety%20in%20Healthcare%20Settings.pdf",
    "AI Applications": [],
    "Category": "Professional Medical Organization",
    "predicted_specialty": "unclassified",
    "Year": 2024,
    "Focus Areas": "Bias and Fairness, Privacy and Security, Ethics and Consent, Safety and Risk Management",
    "State": ""
  },
  {
    "URL": "https://ahima.org/media/1fbfjp2v/ai-eo-cheat-sheet-final.pdf",
    "AI Applications": [],
    "Category": "Professional Medical Organization",
    "predicted_specialty": "unclassified",
    "Year": 2023,
    "Focus Areas": "Bias and Fairness, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.ama-assn.org/system/files/a25-refcomm-e-annotated.pdf",
    "AI Applications": [],
    "Category": "Professional Medical Organization",
    "predicted_specialty": "unclassified",
    "Year": 2025,
    "Focus Areas": "Bias and Fairness, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.himss.org/sites/hde/files/media/file/2023/05/09/digital_excellence_in_healthcare_apac_case_studies_vol_1.pdf",
    "AI Applications": "['Patient-facing AI', 'Predictive Analytics']",
    "Category": "Professional Medical Organization",
    "predicted_specialty": "infectious_diseases",
    "Year": 2021,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Safety and Risk Management",
    "State": ""
  },
  {
    "URL": "https://gkc.himss.org/sites/hde/files/media/file/2023/08/23/himss-davies-award-opioid-case-study-intermountain-health_v2.pdf",
    "AI Applications": [],
    "Category": "Professional Medical Organization",
    "predicted_specialty": "surgery",
    "Year": 2021,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://georgia.himss.org/sites/hde/files/2024-10/ga-interoperability-forum-master-slides_1.pdf",
    "AI Applications": [],
    "Category": "Professional Medical Organization",
    "predicted_specialty": "surgery",
    "Year": 2024,
    "Focus Areas": "Bias and Fairness, Privacy and Security, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.himss.org/sites/hde/files/2022-02/h22-pocket-guide.pdf",
    "AI Applications": [],
    "Category": "Professional Medical Organization",
    "predicted_specialty": "infectious_diseases",
    "Year": "",
    "Focus Areas": "Reliability and Performance, Privacy and Security, Safety and Risk Management",
    "State": ""
  },
  {
    "URL": "https://365.himss.org/sites/himss365/files/365/handouts/552578747/handout-278.pdf",
    "AI Applications": [],
    "Category": "Professional Medical Organization",
    "predicted_specialty": "unclassified",
    "Year": 2014,
    "Focus Areas": "Reliability and Performance, Transparency and Explainability, Safety and Risk Management",
    "State": ""
  },
  {
    "URL": "https://www.aha.org/system/files/media/file/2025/05/joint-cybersecurity-information-tlp-clear-ai-data-security-may-2025.pdf",
    "AI Applications": [],
    "Category": "Academic Institution",
    "predicted_specialty": "unclassified",
    "Year": 2025,
    "Focus Areas": "Bias and Fairness, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.aha.org/system/files/media/file/2020/01/aha-trendwatch-hospital-and-health-system-workforce-strategic-planning2_0.pdf",
    "AI Applications": "['Operational and Administrative Automation', 'Education and Training AI']",
    "Category": "Professional Medical Organization",
    "predicted_specialty": "unclassified",
    "Year": 2020,
    "Focus Areas": "Reliability and Performance, Privacy and Security, Safety and Risk Management",
    "State": ""
  },
  {
    "URL": "https://www.aha.org/system/files/media/file/2024/05/AHA-RFI-Response-to-CMS-on-Medicare-Advantage-Data-and-Oversight.pdf",
    "AI Applications": "['Clinical Decision Support']",
    "Category": "Professional Medical Organization",
    "predicted_specialty": "cardiology, infectious_diseases",
    "Year": 2024,
    "Focus Areas": "Reliability and Performance, Privacy and Security, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.aha.org/system/files/media/file/2023/07/WorkforceWhitePaper.pdf",
    "AI Applications": [],
    "Category": "Professional Medical Organization",
    "predicted_specialty": "psychiatry, infectious_diseases",
    "Year": "",
    "Focus Areas": "Bias and Fairness, Privacy and Security, Ethics and Consent, Safety and Risk Management",
    "State": ""
  },
  {
    "URL": "https://trustees.aha.org/system/files/media/file/2022/11/2023_AHA_Health_Care_Workforce_Scan.pdf",
    "AI Applications": "['Clinical Documentation AI', 'Education and Training AI']",
    "Category": "Professional Medical Organization",
    "predicted_specialty": "psychiatry, infectious_diseases",
    "Year": 2023,
    "Focus Areas": "Reliability and Performance, Privacy and Security, Safety and Risk Management",
    "State": ""
  },
  {
    "URL": "https://www.ihi.org/sites/default/files/lms/legacy/education/IHIOpenSchool/Courses/Documents/CourseraDocuments/11_TCABCommunicationandTeamworkHowtoGuideOct09.pdf",
    "AI Applications": [],
    "Category": "Nonprofit",
    "predicted_specialty": "surgery",
    "Year": 2008,
    "Focus Areas": "Reliability and Performance, Privacy and Security, Safety and Risk Management",
    "State": ""
  },
  {
    "URL": "https://www.iacc.hhs.gov/meetings/iacc-meetings/2024/full-committee-meeting/january24/minutes.pdf",
    "AI Applications": [],
    "Category": "Federal",
    "predicted_specialty": "psychiatry, pediatrics, neurology",
    "Year": 2024,
    "Focus Areas": "Reliability and Performance, Ethics and Consent",
    "State": ""
  },
  {
    "URL": "https://heal.nih.gov/files/2025-02/hsp-health-equity-life-course-executive-summary.pdf",
    "AI Applications": [],
    "Category": "Federal",
    "predicted_specialty": "unclassified",
    "Year": 2024,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://heal.nih.gov/files/2024-12/equity-across-the-life-course-nicholson.pdf",
    "AI Applications": [],
    "Category": "Federal",
    "predicted_specialty": "unclassified",
    "Year": 2021,
    "Focus Areas": "Bias and Fairness, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.ninr.nih.gov/sites/default/files/docs/Minutes_NACNR_9.12.2023_508c.pdf",
    "AI Applications": "['Public Health AI', 'Education and Training AI', 'Research and Clinical Trial AI']",
    "Category": "Federal",
    "predicted_specialty": "Obstetrics_Gynecology",
    "Year": 2023,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Safety and Risk Management",
    "State": ""
  },
  {
    "URL": "https://braininitiative.nih.gov/sites/default/files/documents/NIH-BRAIN-MCWG-meeting-summary-Aug-2024_0.pdf",
    "AI Applications": [],
    "Category": "Federal",
    "predicted_specialty": "neurology",
    "Year": 2024,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://irp.nih.gov/system/files/media/file/2024-05/v32i3-Catalyst-May-June-2024_FINAL.pdf",
    "AI Applications": "['Research and Clinical Trial AI']",
    "Category": "Federal",
    "predicted_specialty": "surgery, oncology, radiology, pathology, endocrinology, pulmonology, neurology, infectious_diseases",
    "Year": 2024,
    "Focus Areas": "Reliability and Performance, Transparency and Explainability, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.hca.wa.gov/assets/cie-landscape-in-wa.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "infectious_diseases",
    "Year": 2022,
    "Focus Areas": "Bias and Fairness, Privacy and Security, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": "Washington"
  },
  {
    "URL": "https://www.medrxiv.org/content/10.1101/2023.03.22.23287585v1.full.pdf",
    "AI Applications": "['Clinical Decision Support', 'Clinical Documentation AI', 'Medical Imaging AI', 'Predictive Analytics', 'Education and Training AI', 'Research and Clinical Trial AI', 'Public Health AI']",
    "Category": "Academic Institution",
    "predicted_specialty": "unclassified",
    "Year": 2023,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://academyhealth.org/sites/default/files/academyhealth_response_to_chai_on_ai_guidelines.pdf",
    "AI Applications": "['Public Health AI']",
    "Category": "Academic Institution",
    "predicted_specialty": "unclassified",
    "Year": 2024,
    "Focus Areas": "Bias and Fairness, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://webfepafem-pafams.org/wp-content/uploads/2023/01/Artificial-Intelligence-in-Health-Professions-Education-Proceedings-of-a-Workshop-1.pdf",
    "AI Applications": "['Education and Training AI', 'Operational and Administrative Automation', 'Patient-facing AI', 'Clinical Documentation AI', 'Clinical Decision Support', 'Robotics and Surgical AI', 'Research and Clinical Trial AI']",
    "Category": "Academic Institution",
    "predicted_specialty": "radiology, psychiatry",
    "Year": 2023,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent",
    "State": ""
  },
  {
    "URL": "https://academyhealth.org/sites/default/files/publication/%5Bfield_date%3Acustom%3AY%5D-%5Bfield_date%3Acustom%3Am%5D/nhc_diagnostic_equity_listening_sessions_summary_report_final.pdf",
    "AI Applications": [],
    "Category": "Professional Medical Organization",
    "predicted_specialty": "cardiology",
    "Year": 2024,
    "Focus Areas": "Safety and Risk Management",
    "State": ""
  },
  {
    "URL": "https://escholarship.org/content/qt13b8z2mq/qt13b8z2mq.pdf",
    "AI Applications": "['Clinical Decision Support', 'Clinical Documentation AI', 'Medical Imaging AI', 'Operational and Administrative Automation', 'Patient-facing AI', 'Robotics and Surgical AI', 'Education and Training AI', 'Research and Clinical Trial AI', 'Public Health AI']",
    "Category": "Academic Institution",
    "predicted_specialty": "unclassified",
    "Year": 2025,
    "Focus Areas": "Bias and Fairness, Transparency and Explainability, Ethics and Consent, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://bjhm.brown.edu/files/2022/12/38021-misguided-artificial-intelligence-how-racial-bias-is-built-into-clinical-models.pdf",
    "AI Applications": "['Medical Imaging AI', 'Education and Training AI', 'Research and Clinical Trial AI', 'Public Health AI']",
    "Category": "Professional Medical Organization",
    "predicted_specialty": "unclassified",
    "Year": 2023,
    "Focus Areas": "Bias and Fairness, Transparency and Explainability, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://tamids.tamu.edu/wp-content/uploads/2022/10/Slides-Sofia-Fantus.pdf",
    "AI Applications": [],
    "Category": "Academic Institution",
    "predicted_specialty": "unclassified",
    "Year": 2022,
    "Focus Areas": "Bias and Fairness, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://repository.yu.edu/bitstream/20.500.12202/6887/1/Schneider%20Shira%20Algorithmic%20Bias_%20A%20New%20Age%20of%20Racism%20OA%202021April.pdf",
    "AI Applications": [],
    "Category": "Academic Institution",
    "predicted_specialty": "unclassified",
    "Year": 2021,
    "Focus Areas": "Bias and Fairness, Transparency and Explainability, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.researchsquare.com/article/rs-151985/latest.pdf",
    "AI Applications": [],
    "Category": "Academic Institution",
    "predicted_specialty": "radiology",
    "Year": 2021,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Transparency and Explainability, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://premierscience.com/wp-content/uploads/2025/02/pjai-24-710.pdf",
    "AI Applications": [],
    "Category": "Academic Institution",
    "predicted_specialty": "unclassified",
    "Year": 2025,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://cdn.agilitycms.com/applied-radiology/PDFs/Issues/AR_01-24_radmatters.pdf",
    "AI Applications": "['Medical Imaging AI']",
    "Category": "Professional Medical Organization",
    "predicted_specialty": "radiology",
    "Year": 2023,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Transparency and Explainability",
    "State": ""
  },
  {
    "URL": "https://ncvhs.hhs.gov/wp-content/uploads/2021/11/Summary-Standards-Listening-Session-August-25-2021-final-508.pdf",
    "AI Applications": [],
    "Category": "Federal",
    "predicted_specialty": "unclassified",
    "Year": 2021,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.healthit.gov/sites/default/files/page/2020-01/PolicyandDevelopmentAgenda.pdf",
    "AI Applications": "['Research and Clinical Trial AI']",
    "Category": "Federal",
    "predicted_specialty": "unclassified",
    "Year": 2020,
    "Focus Areas": "Bias and Fairness, Transparency and Explainability",
    "State": ""
  },
  {
    "URL": "https://www.ncbi.nlm.nih.gov/books/NBK569507/pdf/Bookshelf_NBK569507.pdf",
    "AI Applications": "['Public Health AI']",
    "Category": "Federal",
    "predicted_specialty": "oncology, cardiology, pathology",
    "Year": 2020,
    "Focus Areas": "Bias and Fairness, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.ncbi.nlm.nih.gov/books/NBK561335/pdf/Bookshelf_NBK561335.pdf",
    "AI Applications": [],
    "Category": "Federal",
    "predicted_specialty": "oncology, cardiology, pulmonology, psychiatry, neurology, infectious_diseases",
    "Year": 2020,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Safety and Risk Management",
    "State": ""
  },
  {
    "URL": "https://dxf.chhs.ca.gov/wp-content/uploads/2025/05/DxFSummit_SpeakerBios.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "unclassified",
    "Year": 2025,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Safety and Risk Management, Governance Committees",
    "State": "California"
  },
  {
    "URL": "https://www.ijsat.org/papers/2025/1/2015.pdf",
    "AI Applications": [],
    "Category": "Academic Institution",
    "predicted_specialty": "unclassified",
    "Year": 2025,
    "Focus Areas": "Bias and Fairness, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://pdfs.semanticscholar.org/5099/d873afe528833524977482b467caba34ca93.pdf",
    "AI Applications": [],
    "Category": "Professional Medical Organization",
    "predicted_specialty": "unclassified",
    "Year": 2020,
    "Focus Areas": "Bias and Fairness, Privacy and Security, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://pdfs.semanticscholar.org/4f0e/83ee76f1605e4f4a79a82237b354c5142a74.pdf",
    "AI Applications": "['Public Health AI', 'Operational and Administrative Automation']",
    "Category": "Academic Institution",
    "predicted_specialty": "unclassified",
    "Year": 2024,
    "Focus Areas": "Bias and Fairness, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://philpapers.org/archive/SABFHT-2.pdf",
    "AI Applications": [],
    "Category": "Professional Medical Organization",
    "predicted_specialty": "unclassified",
    "Year": 2025,
    "Focus Areas": "Bias and Fairness, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://pdfs.semanticscholar.org/2f5f/f45fbc8b1798aeb07c276ec117b55f5d91db.pdf",
    "AI Applications": "['Public Health AI', 'Research and Clinical Trial AI', 'Patient-facing AI']",
    "Category": "Academic Institution",
    "predicted_specialty": "infectious_diseases",
    "Year": 2021,
    "Focus Areas": "Bias and Fairness, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://compbio.csail.mit.edu/preprints/preprint_pdfs/Zhang_arXiv_18.pdf",
    "AI Applications": [],
    "Category": "Academic Institution",
    "predicted_specialty": "unclassified",
    "Year": "",
    "Focus Areas": "Bias and Fairness, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://openscholarship.wustl.edu/context/eng_etds/article/2109/viewcontent/1070856.pdf",
    "AI Applications": [],
    "Category": "Academic Institution",
    "predicted_specialty": "cardiology",
    "Year": 2024,
    "Focus Areas": "Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://storage.googleapis.com/arxiv-dataset/arxiv/arxiv/pdf/1811/1811.01431v2.pdf",
    "AI Applications": [],
    "Category": "Academic Institution",
    "predicted_specialty": "unclassified",
    "Year": "",
    "Focus Areas": "Bias and Fairness, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.nature.com/articles/s41598-025-95858-2.pdf",
    "AI Applications": [],
    "Category": "Professional Medical Organization",
    "predicted_specialty": "oncology",
    "Year": 2025,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.ijmrset.com/upload/10_Future_Proof.pdf",
    "AI Applications": [],
    "Category": "Professional Medical Organization",
    "predicted_specialty": "unclassified",
    "Year": 2025,
    "Focus Areas": "Bias and Fairness, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.atlantis-press.com/article/126011345.pdf",
    "AI Applications": [],
    "Category": "Academic Institution",
    "predicted_specialty": "unclassified",
    "Year": 2025,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://assets.cureus.com/uploads/review_article/pdf/361032/20250428-70739-b4gb4v.pdf",
    "AI Applications": "['Education and Training AI', 'Clinical Decision Support', 'Clinical Documentation AI', 'Medical Imaging AI', 'Operational and Administrative Automation', 'Patient-facing AI', 'Robotics and Surgical AI', 'Research and Clinical Trial AI', 'Public Health AI']",
    "Category": "Academic Institution",
    "predicted_specialty": "infectious_diseases",
    "Year": 2025,
    "Focus Areas": "Bias and Fairness, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.aimspress.com/aimspress-data/era/2023/2/PDF/era-31-02-035.pdf",
    "AI Applications": "['Clinical Documentation AI', 'Operational and Administrative Automation', 'Patient-facing AI', 'Education and Training AI', 'Public Health AI']",
    "Category": "Academic Institution",
    "predicted_specialty": "infectious_diseases",
    "Year": 2022,
    "Focus Areas": "Bias and Fairness, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management",
    "State": ""
  },
  {
    "URL": "https://www.ama-assn.org/system/files/ama-digital-health-study.pdf",
    "AI Applications": [],
    "Category": "Professional Medical Organization",
    "predicted_specialty": "unclassified",
    "Year": 2016,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Safety and Risk Management",
    "State": ""
  },
  {
    "URL": "https://www.ama-assn.org/system/files/digital-health-research-webinar-slides.pdf",
    "AI Applications": [],
    "Category": "Professional Medical Organization",
    "predicted_specialty": "unclassified",
    "Year": 2022,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Safety and Risk Management",
    "State": ""
  },
  {
    "URL": "https://www.ama-assn.org/system/files/2019-06/a19-yps-b-grid.pdf",
    "AI Applications": [],
    "Category": "Professional Medical Organization",
    "predicted_specialty": "pulmonology",
    "Year": 2019,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://centralsouthernohio.himss.org/sites/hde/files/2023-12/himsscsoprivacymay10template-1.pdf",
    "AI Applications": [],
    "Category": "Professional Medical Organization",
    "predicted_specialty": "unclassified",
    "Year": 2014,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management",
    "State": ""
  },
  {
    "URL": "https://www.himss.org/sites/hde/files/media/file/2023/04/05/2022-nursing-informatics-workforce-survey.pdf",
    "AI Applications": [],
    "Category": "Professional Medical Organization",
    "predicted_specialty": "unclassified",
    "Year": 2022,
    "Focus Areas": "Reliability and Performance, Privacy and Security, Ethics and Consent, Safety and Risk Management",
    "State": ""
  },
  {
    "URL": "https://www.himss.org/sites/hde/files/media/file/2020/01/21/calculating.the_.value_.of_.informatics.pdf",
    "AI Applications": [],
    "Category": "Nonprofit",
    "predicted_specialty": "unclassified",
    "Year": 1997,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Transparency and Explainability",
    "State": ""
  },
  {
    "URL": "https://www.aha.org/system/files/media/file/2021/04/health-industry-cybersecurity-securing-telehealth-and-telemedicin-april-2021.pdf",
    "AI Applications": [],
    "Category": "Professional Medical Organization",
    "predicted_specialty": "unclassified",
    "Year": 2020,
    "Focus Areas": "Privacy and Security, Ethics and Consent, Safety and Risk Management",
    "State": ""
  },
  {
    "URL": "https://www.aha.org/system/files/media/file/2019/09/MarketInsights_DigitalTransformation.pdf",
    "AI Applications": [],
    "Category": "Professional Medical Organization",
    "predicted_specialty": "unclassified",
    "Year": "",
    "Focus Areas": "Bias and Fairness, Transparency and Explainability, Safety and Risk Management",
    "State": ""
  },
  {
    "URL": "https://405d.hhs.gov/Documents/tech-vol2-508.pdf",
    "AI Applications": [],
    "Category": "Federal",
    "predicted_specialty": "radiology",
    "Year": 2023,
    "Focus Areas": "Bias and Fairness, Privacy and Security, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.healthit.gov/sites/default/files/safer/guides/safer_system_configuration.pdf",
    "AI Applications": [],
    "Category": "Federal",
    "predicted_specialty": "unclassified",
    "Year": 2016,
    "Focus Areas": "Bias and Fairness, Privacy and Security, Ethics and Consent, Safety and Risk Management",
    "State": ""
  },
  {
    "URL": "https://www.healthit.gov/sites/default/files/topiclanding/2025-01/7.%20System%20Management%20Final.pdf",
    "AI Applications": [],
    "Category": "Federal",
    "predicted_specialty": "unclassified",
    "Year": 2024,
    "Focus Areas": "Bias and Fairness, Privacy and Security, Ethics and Consent, Safety and Risk Management",
    "State": ""
  },
  {
    "URL": "https://www.healthit.gov/sites/default/files/2019-12/ONC2020AgendaBasic_0.pdf",
    "AI Applications": [],
    "Category": "Federal",
    "predicted_specialty": "unclassified",
    "Year": 2020,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security",
    "State": ""
  },
  {
    "URL": "https://report.nih.gov/sites/report/files/2025-02/Digital%20NIH%20Final_2025.02.pdf",
    "AI Applications": [],
    "Category": "Federal",
    "predicted_specialty": "unclassified",
    "Year": 2023,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://brics.cit.nih.gov/sites/brics/files/2024-02/11-08-2023-brics-demo-brics-wg-seminar.pdf",
    "AI Applications": [],
    "Category": "Federal",
    "predicted_specialty": "neurology",
    "Year": 2023,
    "Focus Areas": "Reliability and Performance, Transparency and Explainability, Ethics and Consent",
    "State": ""
  },
  {
    "URL": "https://repository.niddk.nih.gov/pdf/NIDDKCR_Artificial%20Intelligence%20Fundementals%20Webinar_20250327.pdf",
    "AI Applications": "['Clinical Decision Support', 'Patient-facing AI', 'Research and Clinical Trial AI', 'Medical Imaging AI', 'Predictive Analytics']",
    "Category": "Federal",
    "predicted_specialty": "unclassified",
    "Year": 2025,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://nvlpubs.nist.gov/nistpubs/ir/2019/NIST.IR.8255.pdf",
    "AI Applications": [],
    "Category": "Federal",
    "predicted_specialty": "unclassified",
    "Year": 2019,
    "Focus Areas": "Bias and Fairness, Privacy and Security, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.cdc.gov/data-modernization/media/pdfs/2025/03/MI_Case_Study_final_report_cleared_508.pdf",
    "AI Applications": [],
    "Category": "Federal",
    "predicted_specialty": "infectious_diseases",
    "Year": 2023,
    "Focus Areas": "Bias and Fairness, Privacy and Security, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.aim-ahead.net/media/u3bmfrsa/ai-cares-dr-monaco.pdf",
    "AI Applications": [],
    "Category": "Professional Medical Organization",
    "predicted_specialty": "neurology",
    "Year": 2024,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://courts.ca.gov/system/files/itc/sp25-01_0.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "unclassified",
    "Year": 2025,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": "California"
  },
  {
    "URL": "https://portal.ct.gov/-/media/AG/Press_Releases/2023/NTIA-AI-Comment.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "unclassified",
    "Year": 2023,
    "Focus Areas": "Bias and Fairness, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": "Connecticut"
  },
  {
    "URL": "https://ahca.myflorida.com/content/download/20129/file/CareSource_FL_AHCA_RFI_014-21-22_MMC_Redacted.pdf",
    "AI Applications": [],
    "Category": "Professional Medical Organization",
    "predicted_specialty": "psychiatry",
    "Year": 2022,
    "Focus Areas": "Reliability and Performance, Privacy and Security, Safety and Risk Management",
    "State": "Florida"
  },
  {
    "URL": "https://dch.georgia.gov/sites/dch.georgia.gov/files/GAMMIS_5010_Encounter_837I_Companion_Guide_v2.3.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "unclassified",
    "Year": 2014,
    "Focus Areas": "Reliability and Performance, Privacy and Security, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": "Georgia"
  },
  {
    "URL": "https://vr.idaho.gov/wp-content/uploads/2025/04/Safeguarding-PII-Confidential-Customer-Information-Policy.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "unclassified",
    "Year": 2025,
    "Focus Areas": "Privacy and Security, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": "Idaho"
  },
  {
    "URL": "https://ita.idaho.gov/psg/g105.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "unclassified",
    "Year": 2010,
    "Focus Areas": "Privacy and Security, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": "Idaho"
  },
  {
    "URL": "https://www.in.gov/mph/cdo/files/State-of-Indiana-Standard-PIA-Methodology.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "unclassified",
    "Year": 2023,
    "Focus Areas": "Bias and Fairness, Privacy and Security, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": "Indiana"
  },
  {
    "URL": "https://mhcc.maryland.gov/mhcc/pages/hit/hit_hie/documents/combined_chapt_18_comments.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "unclassified",
    "Year": 2024,
    "Focus Areas": "Bias and Fairness, Privacy and Security, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": "Maryland"
  },
  {
    "URL": "https://dpbh.nv.gov/uploadedFiles/dpbhnvgov/content/Boards/CWCD/Meetings/2019/National%20Committee%20for%20Quality%20Assurance%20Policies.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "unclassified",
    "Year": 2017,
    "Focus Areas": "Reliability and Performance, Privacy and Security, Safety and Risk Management",
    "State": "Nevada"
  },
  {
    "URL": "https://www.nj.gov/labor/forms_pdfs/lsse/websecurity.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "unclassified",
    "Year": 2012,
    "Focus Areas": "Bias and Fairness, Privacy and Security, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": "New Jersey"
  },
  {
    "URL": "https://www.health.ny.gov/health_care/medicaid/redesign/dsrip/docs/2015-nov_cny_care_paop.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "unclassified",
    "Year": 2015,
    "Focus Areas": "Reliability and Performance, Privacy and Security, Safety and Risk Management, Governance Committees",
    "State": "New York"
  },
  {
    "URL": "https://www.health.ny.gov/health_care/medicaid/redesign/docs/dsrip_health_home_webinar_slides.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "unclassified",
    "Year": 2014,
    "Focus Areas": "Reliability and Performance, Privacy and Security, Safety and Risk Management, Governance Committees",
    "State": "New York"
  },
  {
    "URL": "https://www.oregon.gov/oha/PH/DISEASESCONDITIONS/COMMUNICABLEDISEASE/Documents/Informatics101-2025.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "unclassified",
    "Year": 2025,
    "Focus Areas": "Bias and Fairness, Privacy and Security, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": "Oregon"
  },
  {
    "URL": "https://watech.wa.gov/sites/default/files/2023-11/WA%20EHR_Final%20Enterprise%20EHR%20Plan_vFinal%20-%20TSB%20Review.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "psychiatry",
    "Year": 2023,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": "Washington"
  },
  {
    "URL": "https://www.scitepress.org/Papers/2024/129161/129161.pdf",
    "AI Applications": [],
    "Category": "Academic Institution",
    "predicted_specialty": "psychiatry",
    "Year": 2024,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://ceur-ws.org/Vol-3264/HEDA22_paper_3.pdf",
    "AI Applications": [],
    "Category": "Academic Institution",
    "predicted_specialty": "unclassified",
    "Year": 2022,
    "Focus Areas": "Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "http://www.jatit.org/volumes/Vol102No22/9Vol102No22.pdf",
    "AI Applications": [],
    "Category": "Academic Institution",
    "predicted_specialty": "unclassified",
    "Year": 2024,
    "Focus Areas": "Privacy and Security, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://urfjournals.org/open-access/data-governance-frameworks-on-databricks-a-role-for-unity-catlog.pdf",
    "AI Applications": [],
    "Category": "Academic Institution",
    "predicted_specialty": "unclassified",
    "Year": 2024,
    "Focus Areas": "Bias and Fairness, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.terry.uga.edu/wp-content/uploads/Bardhan-Chen-Karahanna-MISQ-2020-Multidisciplinary-Research-Roadmap-for-Chronic-Disease-Management.pdf",
    "AI Applications": "['Predictive Analytics', 'Public Health AI', 'Clinical Decision Support', 'Patient-facing AI', 'Education and Training AI', 'Research and Clinical Trial AI', 'Medical Imaging AI', 'Operational and Administrative Automation']",
    "Category": "Academic Institution",
    "predicted_specialty": "cardiology, endocrinology, psychiatry",
    "Year": 2020,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Transparency and Explainability, Ethics and Consent, Safety and Risk Management",
    "State": ""
  },
  {
    "URL": "https://ci.unt.edu/computational-humanities-information-literacy-lab/aitransparency.pdf",
    "AI Applications": "['Clinical Documentation AI', 'Operational and Administrative Automation', 'Education and Training AI', 'Public Health AI']",
    "Category": "Academic Institution",
    "predicted_specialty": "unclassified",
    "Year": 2025,
    "Focus Areas": "Bias and Fairness, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://ucop.edu/uc-health/reports-resources/uchealth-data-governance-task-force-report_2024_final_06272024.pdf",
    "AI Applications": [],
    "Category": "Academic Institution",
    "predicted_specialty": "unclassified",
    "Year": 2024,
    "Focus Areas": "Bias and Fairness, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://openaccess.thecvf.com/content/CVPR2024W/WRD24/papers/Kandolo_Ensuring_AI_Data_Access_Control_in_RDBMS_A_Comprehensive_Review_CVPRW_2024_paper.pdf",
    "AI Applications": [],
    "Category": "Academic Institution",
    "predicted_specialty": "unclassified",
    "Year": 1999,
    "Focus Areas": "Bias and Fairness, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.parexel.com/application/files/4817/4421/6909/fy25-article-delivering-ai-managed-clinical-research.pdf",
    "AI Applications": "['Research and Clinical Trial AI', 'Clinical Documentation AI']",
    "Category": "Professional Medical Organization",
    "predicted_specialty": "unclassified",
    "Year": 2025,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://globusmedicaljournal.com/wp-content/uploads/2024/12/GMSET-JD24-132-9-Anoop-Srivastava.pdf",
    "AI Applications": [],
    "Category": "Professional Medical Organization",
    "predicted_specialty": "unclassified",
    "Year": 2024,
    "Focus Areas": "Bias and Fairness, Privacy and Security, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.allmultidisciplinaryjournal.com/uploads/archives/20240713162614_B-24-225.1.pdf",
    "AI Applications": "['Public Health AI']",
    "Category": "Academic Institution",
    "predicted_specialty": "unclassified",
    "Year": 2024,
    "Focus Areas": "Bias and Fairness, Privacy and Security, Ethics and Consent, Safety and Risk Management",
    "State": ""
  },
  {
    "URL": "http://ijits-bg.com/sites/default/files/archive/2024%28vol.16%29/No3/contents/2024-N3-06.pdf",
    "AI Applications": [],
    "Category": "Academic Institution",
    "predicted_specialty": "unclassified",
    "Year": 2024,
    "Focus Areas": "Bias and Fairness, Privacy and Security, Ethics and Consent, Safety and Risk Management",
    "State": ""
  },
  {
    "URL": "https://www.ahima.org/media/m5tlmokb/2023-ahima-advocacy-agenda_.pdf",
    "AI Applications": [],
    "Category": "Professional Medical Organization",
    "predicted_specialty": "infectious_diseases",
    "Year": 2023,
    "Focus Areas": "Bias and Fairness, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management",
    "State": ""
  },
  {
    "URL": "https://www.ahima.org/media/p0nfxhgg/2024-advocacy-agenda_final-link.pdf",
    "AI Applications": [],
    "Category": "Professional Medical Organization",
    "predicted_specialty": "unclassified",
    "Year": 2024,
    "Focus Areas": "Bias and Fairness, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.ama-assn.org/system/files/insight-network-summit-presentations.pdf",
    "AI Applications": "['Clinical Documentation AI']",
    "Category": "Professional Medical Organization",
    "predicted_specialty": "unclassified",
    "Year": "",
    "Focus Areas": "Reliability and Performance, Privacy and Security, Safety and Risk Management",
    "State": ""
  },
  {
    "URL": "https://www.himss.org/sites/hde/files/media/file/2024/04/18/wp_value-of-clinical-informatics-1.pdf",
    "AI Applications": "['Clinical Documentation AI', 'Predictive Analytics', 'Patient-facing AI', 'Public Health AI']",
    "Category": "Professional Medical Organization",
    "predicted_specialty": "unclassified",
    "Year": 2022,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Safety and Risk Management",
    "State": ""
  },
  {
    "URL": "https://www.himss.org/sites/hde/files/media/file/2022/04/26/pubpolicyprinciples.pdf",
    "AI Applications": "['Public Health AI']",
    "Category": "Nonprofit",
    "predicted_specialty": "unclassified",
    "Year": "",
    "Focus Areas": "Bias and Fairness, Privacy and Security, Ethics and Consent, Safety and Risk Management",
    "State": ""
  },
  {
    "URL": "https://michigan.himss.org/sites/hde/files/media/file/2024/11/14/medecision-whitepaper-modern-healthcare-data-platform.pdf",
    "AI Applications": [],
    "Category": "Professional Medical Organization",
    "predicted_specialty": "unclassified",
    "Year": "",
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Transparency and Explainability, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://gkc.himss.org/sites/hde/files/media/file/2023/08/17/cross-border-health-data-flows-global-report_roche-himss.pdf",
    "AI Applications": [],
    "Category": "Professional Medical Organization",
    "predicted_specialty": "oncology, infectious_diseases",
    "Year": "",
    "Focus Areas": "Bias and Fairness, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://oregon.himss.org/sites/hde/files/media/file/2024/09/11/dhage-report_2024_v3.pdf",
    "AI Applications": [],
    "Category": "Professional Medical Organization",
    "predicted_specialty": "unclassified",
    "Year": 2024,
    "Focus Areas": "Bias and Fairness, Privacy and Security, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.aha.org/system/files/media/file/2023/09/cisa-tlp-clear-continuous-diagnostics-and-mitigation-program-report-9-2023.pdf",
    "AI Applications": [],
    "Category": "Professional Medical Organization",
    "predicted_specialty": "unclassified",
    "Year": 2023,
    "Focus Areas": "Reliability and Performance, Privacy and Security, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.aha.org/system/files/media/file/2021/01/MI_Leveraging_Data_Report.pdf",
    "AI Applications": [],
    "Category": "Professional Medical Organization",
    "predicted_specialty": "infectious_diseases",
    "Year": "",
    "Focus Areas": "Bias and Fairness, Reliability and Performance",
    "State": ""
  },
  {
    "URL": "https://www.aha.org/system/files/media/file/2022/07/Strengthening-the-Health-Care-Workforce-Ssection-2-Data-and-Technology.pdf",
    "AI Applications": "['Operational and Administrative Automation', 'Education and Training AI']",
    "Category": "Professional Medical Organization",
    "predicted_specialty": "unclassified",
    "Year": 2022,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.ihi.org/sites/default/files/2023-09/IHIBreakthroughSerieswhitepaper2003.pdf",
    "AI Applications": [],
    "Category": "Academic Institution",
    "predicted_specialty": "Obstetrics_Gynecology, pulmonology",
    "Year": 2003,
    "Focus Areas": "Bias and Fairness, Reliability and Performance",
    "State": ""
  },
  {
    "URL": "https://www.ruralhealth.us/getmedia/b219a0c0-6ae4-493d-a668-520fc650235f/Final-AC-RHIS-2023-Agenda-5-16-23.pdf",
    "AI Applications": [],
    "Category": "Professional Medical Organization",
    "predicted_specialty": "Obstetrics_Gynecology, psychiatry",
    "Year": 2023,
    "Focus Areas": "Reliability and Performance, Privacy and Security, Safety and Risk Management",
    "State": ""
  },
  {
    "URL": "https://aspe.hhs.gov/sites/default/files/documents/39bf078c2fcbb24357cc3d6dd590483d/2023-os-pcortf-portfolio-report.pdf",
    "AI Applications": [],
    "Category": "Federal",
    "predicted_specialty": "Obstetrics_Gynecology, oncology, psychiatry, pediatrics, infectious_diseases",
    "Year": 2023,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Safety and Risk Management",
    "State": ""
  },
  {
    "URL": "https://www.healthit.gov/sites/default/files/2023-10/Enabling%20Patient%20Access%20to%20Health%20Data%20for%20Actionable%20Results%20-%20Speaker%20Bios.pdf",
    "AI Applications": [],
    "Category": "Federal",
    "predicted_specialty": "unclassified",
    "Year": 2018,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.healthit.gov/sites/default/files/page/2021-11/20211117_API%20Write-back%20Workshop%20Summary%20Report.pdf",
    "AI Applications": "['Patient-facing AI']",
    "Category": "Federal",
    "predicted_specialty": "unclassified",
    "Year": 2021,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Transparency and Explainability, Ethics and Consent",
    "State": ""
  },
  {
    "URL": "https://osp.od.nih.gov/wp-content/uploads/2024/10/Compiled-Public-Comments-on-RFI-on-the-NIH-Draft-Public-Access-Policy-508C.pdf",
    "AI Applications": [],
    "Category": "Federal",
    "predicted_specialty": "oncology, psychiatry, neurology",
    "Year": 2024,
    "Focus Areas": "Bias and Fairness, Privacy and Security, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.ncbi.nlm.nih.gov/books/NBK551879/pdf/Bookshelf_NBK551879.pdf",
    "AI Applications": [],
    "Category": "Federal",
    "predicted_specialty": "surgery, oncology, radiology, cardiology, pathology, endocrinology, pulmonology, rheumatology, psychiatry",
    "Year": 2014,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Ethics and Consent, Safety and Risk Management",
    "State": ""
  },
  {
    "URL": "https://www.ncbi.nlm.nih.gov/books/NBK544217/pdf/Bookshelf_NBK544217.pdf",
    "AI Applications": [],
    "Category": "Federal",
    "predicted_specialty": "oncology, cardiology, endocrinology, pulmonology, rheumatology, psychiatry, pediatrics, neurology",
    "Year": 2019,
    "Focus Areas": "Reliability and Performance, Safety and Risk Management",
    "State": ""
  },
  {
    "URL": "https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.1270-draft.pdf",
    "AI Applications": [],
    "Category": "Federal",
    "predicted_specialty": "unclassified",
    "Year": 2021,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.cms.gov/medicare/quality-initiatives-patient-assessment-instruments/oasis/downloads/qandadocument0909.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "surgery, oncology, cardiology, pulmonology, nephrology, neurology",
    "Year": 2003,
    "Focus Areas": "Reliability and Performance, Privacy and Security, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://data.capitol.hawaii.gov/sessions/session2011/Testimony/SB803_TESTIMONY_HTH_02-07-11.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "oncology, psychiatry, neurology",
    "Year": 2011,
    "Focus Areas": "Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": "Hawaii"
  },
  {
    "URL": "https://dam.assets.ohio.gov/image/upload/med.ohio.gov/april%202022%20rules%20_%20policies%20packet.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "surgery, Obstetrics_Gynecology, oncology, cardiology, endocrinology, pulmonology, nephrology, psychiatry, pediatrics, dermatology, neurology, infectious_diseases",
    "Year": 2022,
    "Focus Areas": "Reliability and Performance, Privacy and Security, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": "Ohio"
  },
  {
    "URL": "https://watech.wa.gov/sites/default/files/2023-11/Automated%2520Decision%2520Systems%2520Workgroup%2520Report.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "unclassified",
    "Year": 2021,
    "Focus Areas": "Bias and Fairness, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": "Washington"
  },
  {
    "URL": "https://www.statewatch.org/media/documents/news/2020/mar/ep-study-ethics-ai-issues-initiatives-3-20.pdf",
    "AI Applications": "['Patient-facing AI', 'Robotics and Surgical AI']",
    "Category": "Academic Institution",
    "predicted_specialty": "surgery, psychiatry, neurology",
    "Year": 2020,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.nursingworld.org/globalassets/practiceandpolicy/nursing-excellence/ana-position-statements/the-ethical-use-of-artificial-intelligence-in-nursing-practice_bod-approved-12_20_22.pdf",
    "AI Applications": "['Operational and Administrative Automation', 'Patient-facing AI', 'Education and Training AI', 'Public Health AI']",
    "Category": "Professional Medical Organization",
    "predicted_specialty": "unclassified",
    "Year": 2015,
    "Focus Areas": "Bias and Fairness, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://reports.weforum.org/docs/WEF_The_Future_of_AI_Enabled_Health_2025.pdf",
    "AI Applications": "['Clinical Documentation AI', 'Operational and Administrative Automation', 'Patient-facing AI', 'Education and Training AI', 'Public Health AI', 'Research and Clinical Trial AI', 'Medical Imaging AI']",
    "Category": "Professional Medical Organization",
    "predicted_specialty": "infectious_diseases",
    "Year": 2025,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www3.weforum.org/docs/WEF_Governance_of_Chatbots_in_Healthcare_2020.pdf",
    "AI Applications": "['Patient-facing AI']",
    "Category": "Professional Medical Organization",
    "predicted_specialty": "infectious_diseases",
    "Year": 2020,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://hdr.undp.org/system/files/documents/background-paper-document/2021-22hdrstankovich.pdf",
    "AI Applications": "['Public Health AI', 'Clinical Decision Support', 'Medical Imaging AI', 'Operational and Administrative Automation', 'Clinical Documentation AI', 'Patient-facing AI', 'Research and Clinical Trial AI']",
    "Category": "Academic Institution",
    "predicted_specialty": "infectious_diseases",
    "Year": 2022,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.bioethics.miami.edu/_assets/pdf/information-technology-and-ethics/ai-and-big-data-resources/ai-in-healthcare-and-research.pdf",
    "AI Applications": "['Research and Clinical Trial AI', 'Public Health AI', 'Education and Training AI', 'Operational and Administrative Automation', 'Patient-facing AI', 'Clinical Decision Support', 'Clinical Documentation AI', 'Medical Imaging AI', 'Robotics and Surgical AI']",
    "Category": "Professional Medical Organization",
    "predicted_specialty": "unclassified",
    "Year": 2018,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://preserve.lehigh.edu/_flysystem/fedora/2024-03/ceb1f3554237d2bc654cffdb2efe8a41.pdf",
    "AI Applications": [],
    "Category": "Academic Institution",
    "predicted_specialty": "unclassified",
    "Year": 2023,
    "Focus Areas": "Bias and Fairness, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://psb.stanford.edu/psb-online/proceedings/psb21/intro-trustworthy.pdf",
    "AI Applications": "['Patient-facing AI']",
    "Category": "Academic Institution",
    "predicted_specialty": "psychiatry, pediatrics",
    "Year": 2021,
    "Focus Areas": "Bias and Fairness, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.iit.edu/sites/default/files/2023-05/LCoS_CSEP_CEPE%20Virtual%20Program%202023%20Final.pdf",
    "AI Applications": "['Medical Imaging AI']",
    "Category": "Academic Institution",
    "predicted_specialty": "unclassified",
    "Year": 2023,
    "Focus Areas": "Bias and Fairness, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://cihi.uta.edu/files/2024/09/Abstract-Packet-THIA-2024.pdf",
    "AI Applications": "['Clinical Documentation AI', 'Operational and Administrative Automation', 'Education and Training AI', 'Research and Clinical Trial AI', 'Patient-facing AI']",
    "Category": "Academic Institution",
    "predicted_specialty": "unclassified",
    "Year": 2021,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management",
    "State": ""
  },
  {
    "URL": "https://www.ipsos.com/sites/default/files/ct/news/documents/2024-09/Ipsos%20Public%20Trust%20in%20AI.pdf",
    "AI Applications": [],
    "Category": "Academic Institution",
    "predicted_specialty": "unclassified",
    "Year": 2024,
    "Focus Areas": "Bias and Fairness, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.globalwellnesssummit.com/wp-content/uploads/2021/02/WEF_Governance_of_Chatbots_in_Healthcare_2020.pdf",
    "AI Applications": "['Patient-facing AI']",
    "Category": "Nonprofit",
    "predicted_specialty": "infectious_diseases",
    "Year": 2020,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://epc-web-s3.s3.amazonaws.com/content/PDF/2022/CHES_PB_v2-2.pdf",
    "AI Applications": "['Research and Clinical Trial AI', 'Public Health AI']",
    "Category": "Professional Medical Organization",
    "predicted_specialty": "infectious_diseases",
    "Year": 2022,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://systematicreviewsjournal.biomedcentral.com/counter/pdf/10.1186/s13643-022-02012-4.pdf",
    "AI Applications": "['Robotics and Surgical AI']",
    "Category": "Academic Institution",
    "predicted_specialty": "unclassified",
    "Year": 2022,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.saspublishers.com/media/articles/SJAMS_1112_2119-2130.pdf",
    "AI Applications": "['Operational and Administrative Automation', 'Clinical Documentation AI', 'Public Health AI', 'Education and Training AI']",
    "Category": "Professional Medical Organization",
    "predicted_specialty": "unclassified",
    "Year": 2023,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://jeichstaedt.com/s/clinicalLLMsv14.pdf",
    "AI Applications": [],
    "Category": "Academic Institution",
    "predicted_specialty": "psychiatry, neurology",
    "Year": "",
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://code-medical-ethics.ama-assn.org/sites/default/files/2022-09/11.1.2%20Physician%20stewardship%20of%20health%20care%20resources%20--%20background%20reports.pdf",
    "AI Applications": "['Education and Training AI', 'Research and Clinical Trial AI']",
    "Category": "Professional Medical Organization",
    "predicted_specialty": "unclassified",
    "Year": "",
    "Focus Areas": "Bias and Fairness, Privacy and Security, Transparency and Explainability, Ethics and Consent, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://journalofethics.ama-assn.org/sites/joedb/files/2022-11/cscm3-2212_1.pdf",
    "AI Applications": "['Clinical Decision Support']",
    "Category": "Professional Medical Organization",
    "predicted_specialty": "unclassified",
    "Year": 2022,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://code-medical-ethics.ama-assn.org/sites/amacoedb/files/2024-12/2.1.1%20Informed%20consent%20--%20background%20reports_0.pdf",
    "AI Applications": [],
    "Category": "Professional Medical Organization",
    "predicted_specialty": "unclassified",
    "Year": 2024,
    "Focus Areas": "Bias and Fairness, Privacy and Security, Ethics and Consent, Safety and Risk Management",
    "State": ""
  },
  {
    "URL": "https://journalofethics.ama-assn.org/sites/joedb/files/2024-12/msoc1-peer-2501.pdf",
    "AI Applications": [],
    "Category": "Professional Medical Organization",
    "predicted_specialty": "unclassified",
    "Year": 2025,
    "Focus Areas": "Bias and Fairness, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://sponsors.aha.org/rs/710-ZLL-651/images/2023_AHA_Summit_Conference_Guide.pdf",
    "AI Applications": [],
    "Category": "Professional Medical Organization",
    "predicted_specialty": "psychiatry, infectious_diseases",
    "Year": 2023,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Safety and Risk Management",
    "State": ""
  },
  {
    "URL": "https://www.healthit.gov/sites/default/files/page/2023-03/FY%202024%20ONC%20508%20%28002%29.pdf",
    "AI Applications": [],
    "Category": "Federal",
    "predicted_specialty": "infectious_diseases",
    "Year": 2024,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.healthit.gov/sites/default/files/topiclanding/2021-07/Workflow_Automation_Background_Report_FINAL.pdf",
    "AI Applications": [],
    "Category": "Federal",
    "predicted_specialty": "radiology",
    "Year": 2020,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.healthit.gov/sites/default/files/2023-10/Modernizing%20Public%20Health%20Data%20Exchange%20Day%201_508.pdf",
    "AI Applications": [],
    "Category": "Federal",
    "predicted_specialty": "infectious_diseases",
    "Year": 2022,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management",
    "State": ""
  },
  {
    "URL": "https://www.healthit.gov/sites/default/files/safer/guides/safer_high_priority_practices.pdf",
    "AI Applications": [],
    "Category": "Federal",
    "predicted_specialty": "radiology",
    "Year": 2016,
    "Focus Areas": "Bias and Fairness, Privacy and Security, Ethics and Consent, Safety and Risk Management",
    "State": ""
  },
  {
    "URL": "https://www.healthit.gov/sites/default/files/task_9_report.pdf",
    "AI Applications": [],
    "Category": "Federal",
    "predicted_specialty": "unclassified",
    "Year": 2016,
    "Focus Areas": "Bias and Fairness, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management",
    "State": ""
  },
  {
    "URL": "https://www.healthit.gov/sites/default/files/CaseStudySynthesisGranteeExperienceFinal_121014.pdf",
    "AI Applications": [],
    "Category": "Federal",
    "predicted_specialty": "unclassified",
    "Year": 2014,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.healthit.gov/sites/default/files/onc-beacon-lg4-clinical-transformation-via-hit_.pdf",
    "AI Applications": [],
    "Category": "Federal",
    "predicted_specialty": "radiology, cardiology, pulmonology",
    "Year": 2013,
    "Focus Areas": "Bias and Fairness, Privacy and Security, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.healthit.gov/sites/default/files/onc-beacon-lg3-ehr-data-quality-and-perform-impvt.pdf",
    "AI Applications": "['Clinical Decision Support']",
    "Category": "Federal",
    "predicted_specialty": "endocrinology",
    "Year": 2013,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Safety and Risk Management",
    "State": ""
  },
  {
    "URL": "https://www.ncbi.nlm.nih.gov/books/NBK442296/pdf/Bookshelf_NBK442296.pdf",
    "AI Applications": [],
    "Category": "Federal",
    "predicted_specialty": "oncology, radiology, pathology, pulmonology, nephrology, hematology, pediatrics, dermatology",
    "Year": 2018,
    "Focus Areas": "Reliability and Performance, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.ncbi.nlm.nih.gov/books/NBK589930/pdf/Bookshelf_NBK589930.pdf",
    "AI Applications": [],
    "Category": "Federal",
    "predicted_specialty": "Obstetrics_Gynecology, oncology, cardiology, pathology, endocrinology, hematology, psychiatry, pediatrics, infectious_diseases",
    "Year": 2023,
    "Focus Areas": "Reliability and Performance, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://cppa.ca.gov/meetings/materials/20220329_30_day_2_item_5e_kaminski.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "unclassified",
    "Year": "",
    "Focus Areas": "Bias and Fairness, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": "California"
  },
  {
    "URL": "https://mhcc.maryland.gov/mhcc/pages/home/meeting_schedule/documents/updates/2024/updt_20240222.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "unclassified",
    "Year": 2024,
    "Focus Areas": "Reliability and Performance, Privacy and Security, Safety and Risk Management",
    "State": "Maryland"
  },
  {
    "URL": "https://www.vita.virginia.gov/media/vitavirginiagov/commonwealth-security/pdf/meetings/isoag/2024/ISOAG-PowerPoint-Presentation-March-2024.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "unclassified",
    "Year": 2024,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": "Virginia"
  },
  {
    "URL": "https://watech.wa.gov/sites/default/files/2024-10/Resident%20Portal%20Tech%20And%20Architecture%20Requirements%20-%20Final.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "unclassified",
    "Year": 2024,
    "Focus Areas": "Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": "Washington"
  },
  {
    "URL": "https://parispeaceforum.org/app/uploads/2025/02/forging-global-cooperation-on-ai-risks-cyber-policy-as-a-governance-blueprint.pdf",
    "AI Applications": [],
    "Category": "Academic Institution",
    "predicted_specialty": "unclassified",
    "Year": 2024,
    "Focus Areas": "Bias and Fairness, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://ceur-ws.org/Vol-3701/paper11.pdf",
    "AI Applications": "['Operational and Administrative Automation', 'Education and Training AI', 'Public Health AI']",
    "Category": "Professional Medical Organization",
    "predicted_specialty": "unclassified",
    "Year": 2024,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.benzevgreen.com/wp-content/uploads/2022/04/22-clsr.pdf",
    "AI Applications": [],
    "Category": "Academic Institution",
    "predicted_specialty": "unclassified",
    "Year": 2022,
    "Focus Areas": "Bias and Fairness, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://uploads-ssl.webflow.com/63345e33f3c909d27d0e558b/64efbe8b48bb601b00e09b9b_Ej4WY_Ud_wm_UF1R6fwwGFg0KjeFKLOg0HW2bzVgJJk.pdf",
    "AI Applications": "['Medical Imaging AI', 'Research and Clinical Trial AI']",
    "Category": "Academic Institution",
    "predicted_specialty": "unclassified",
    "Year": 2020,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.ama-assn.org/system/files/a25-refcomm-b-annotated.pdf",
    "AI Applications": "['Clinical Documentation AI', 'Education and Training AI']",
    "Category": "Professional Medical Organization",
    "predicted_specialty": "radiology, psychiatry, neurology",
    "Year": 2025,
    "Focus Areas": "Reliability and Performance, Privacy and Security, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.ama-assn.org/system/files/a25-refcomm-b-report.pdf",
    "AI Applications": "['Robotics and Surgical AI', 'Clinical Documentation AI', 'Education and Training AI']",
    "Category": "Professional Medical Organization",
    "predicted_specialty": "radiology, psychiatry, neurology",
    "Year": 2015,
    "Focus Areas": "Reliability and Performance, Privacy and Security, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.aha.org/system/files/media/file/2020/01/The-Power-of-Harnessing-Patient-Safety-Data-with-Artificial-Intelligence.pdf",
    "AI Applications": "['Education and Training AI', 'Research and Clinical Trial AI', 'Operational and Administrative Automation', 'Predictive Analytics', 'Patient-facing AI', 'Public Health AI']",
    "Category": "Professional Medical Organization",
    "predicted_specialty": "infectious_diseases",
    "Year": 2019,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability",
    "State": ""
  },
  {
    "URL": "https://www.aha.org/system/files/media/file/2022/12/Environmental_Scan_2023.pdf",
    "AI Applications": "['Operational and Administrative Automation', 'Education and Training AI']",
    "Category": "Professional Medical Organization",
    "predicted_specialty": "psychiatry, infectious_diseases",
    "Year": 2023,
    "Focus Areas": "Reliability and Performance, Privacy and Security, Safety and Risk Management",
    "State": ""
  },
  {
    "URL": "https://www.aha.org/system/files/media/file/2024/06/aha-comments-on-cms-inpatient-payment-proposal-for-fy-2025-letter-6-5-24.pdf",
    "AI Applications": [],
    "Category": "Professional Medical Organization",
    "predicted_specialty": "surgery, Obstetrics_Gynecology, oncology, cardiology, pulmonology, nephrology, neurology, infectious_diseases",
    "Year": 2024,
    "Focus Areas": "Reliability and Performance, Privacy and Security, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.healthit.gov/sites/default/files/page/2020-03/HITAC%20Annual%20Report%20for%20FY19_508.pdf",
    "AI Applications": [],
    "Category": "Federal",
    "predicted_specialty": "pediatrics",
    "Year": 2019,
    "Focus Areas": "Bias and Fairness, Privacy and Security, Ethics and Consent, Safety and Risk Management",
    "State": ""
  },
  {
    "URL": "https://www.nibib.nih.gov/sites/default/files/2022-04/CJ-FY2023.pdf",
    "AI Applications": "['Medical Imaging AI', 'Public Health AI', 'Patient-facing AI']",
    "Category": "Federal",
    "predicted_specialty": "surgery, oncology, radiology, neurology, infectious_diseases",
    "Year": 2023,
    "Focus Areas": "Reliability and Performance, Transparency and Explainability, Safety and Risk Management",
    "State": ""
  },
  {
    "URL": "https://osp.od.nih.gov/wp-content/uploads/2024/05/DigitalHealthResource_Final.pdf",
    "AI Applications": [],
    "Category": "Federal",
    "predicted_specialty": "unclassified",
    "Year": 2024,
    "Focus Areas": "Privacy and Security, Ethics and Consent, Safety and Risk Management",
    "State": ""
  },
  {
    "URL": "https://www.dhcd.virginia.gov/sites/default/files/DocX/vati/dop-appendix-files/virginia-digital-opportunity-plan.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "unclassified",
    "Year": 2023,
    "Focus Areas": "Privacy and Security, Ethics and Consent, Safety and Risk Management",
    "State": "Virginia"
  },
  {
    "URL": "https://mrctcenter.org/wp-content/uploads/2022/11/1-s2.0-S1053811921004870-main.pdf",
    "AI Applications": [],
    "Category": "Academic Institution",
    "predicted_specialty": "radiology, psychiatry, neurology",
    "Year": 2021,
    "Focus Areas": "Reliability and Performance, Privacy and Security, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.medrxiv.org/content/10.1101/2023.12.26.23300539v2.full.pdf",
    "AI Applications": "['Public Health AI', 'Medical Imaging AI', 'Operational and Administrative Automation', 'Research and Clinical Trial AI', 'Patient-facing AI']",
    "Category": "Academic Institution",
    "predicted_specialty": "radiology, cardiology, pulmonology, pediatrics, infectious_diseases",
    "Year": 2024,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Transparency and Explainability, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.ijmsm.org/volume2-issue1/IJMSM-V2I1P104.pdf",
    "AI Applications": "['Public Health AI', 'Operational and Administrative Automation']",
    "Category": "Professional Medical Organization",
    "predicted_specialty": "infectious_diseases",
    "Year": 2025,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "http://www.jatit.org/volumes/Vol102No16/3Vol102No16.pdf",
    "AI Applications": "['Predictive Analytics', 'Clinical Decision Support']",
    "Category": "Academic Institution",
    "predicted_specialty": "endocrinology",
    "Year": 2024,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Transparency and Explainability, Ethics and Consent, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://urfjournals.org/open-access/artificial-intelligence-in-nursing-a-comprehensive-review-of-current-applications-and-future-prospects.pdf",
    "AI Applications": "['Education and Training AI', 'Operational and Administrative Automation', 'Clinical Decision Support', 'Medical Imaging AI', 'Predictive Analytics', 'Patient-facing AI', 'Research and Clinical Trial AI', 'Public Health AI', 'Clinical Documentation AI', 'Robotics and Surgical AI']",
    "Category": "Academic Institution",
    "predicted_specialty": "surgery",
    "Year": 2025,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://psb.stanford.edu/psb-online/proceedings/psb25/rajput.pdf",
    "AI Applications": "['Public Health AI', 'Research and Clinical Trial AI']",
    "Category": "Academic Institution",
    "predicted_specialty": "pathology, infectious_diseases",
    "Year": 2025,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Transparency and Explainability, Ethics and Consent, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.heinz.cmu.edu/heinz-shared/_files/pdf/heinz-policy-impact/transition-memo_block-center-2025.pdf",
    "AI Applications": "['Education and Training AI', 'Operational and Administrative Automation', 'Public Health AI', 'Patient-facing AI']",
    "Category": "Academic Institution",
    "predicted_specialty": "unclassified",
    "Year": "",
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://cdh.stanford.edu/sites/g/files/sbiybj29486/files/media/file/stanford_scdh_genaiwhitepaper_v18_compressed.pdf",
    "AI Applications": "['Public Health AI', 'Education and Training AI', 'Clinical Documentation AI', 'Clinical Decision Support', 'Patient-facing AI', 'Research and Clinical Trial AI', 'Medical Imaging AI', 'Predictive Analytics', 'Operational and Administrative Automation', 'Robotics and Surgical AI']",
    "Category": "Professional Medical Organization",
    "predicted_specialty": "Obstetrics_Gynecology, psychiatry, pediatrics, infectious_diseases",
    "Year": 2024,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://ijrpr.com/uploads/V6ISSUE1/IJRPR38014.pdf",
    "AI Applications": "['Patient-facing AI', 'Clinical Documentation AI', 'Medical Imaging AI', 'Robotics and Surgical AI', 'Education and Training AI', 'Research and Clinical Trial AI', 'Clinical Decision Support', 'Public Health AI', 'Operational and Administrative Automation']",
    "Category": "Academic Institution",
    "predicted_specialty": "unclassified",
    "Year": 2025,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.msdformothers.com/docs/Supporting-Mothers-through-Digital-Health_MSD.pdf",
    "AI Applications": [],
    "Category": "Professional Medical Organization",
    "predicted_specialty": "Obstetrics_Gynecology",
    "Year": 2023,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Transparency and Explainability, Ethics and Consent",
    "State": ""
  },
  {
    "URL": "https://www.jscimedcentral.com/public/assets/articles/translationalmedicine-7-1046.pdf",
    "AI Applications": "['Education and Training AI', 'Public Health AI', 'Patient-facing AI', 'Research and Clinical Trial AI', 'Medical Imaging AI', 'Clinical Decision Support', 'Predictive Analytics']",
    "Category": "Professional Medical Organization",
    "predicted_specialty": "Obstetrics_Gynecology, infectious_diseases",
    "Year": 2024,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://journalwjarr.com/sites/default/files/fulltext_pdf/WJARR-2025-0298.pdf",
    "AI Applications": "['Public Health AI', 'Education and Training AI', 'Predictive Analytics', 'Operational and Administrative Automation', 'Research and Clinical Trial AI', 'Clinical Documentation AI', 'Patient-facing AI', 'Medical Imaging AI', 'Clinical Decision Support']",
    "Category": "Academic Institution",
    "predicted_specialty": "oncology, cardiology",
    "Year": 2025,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Transparency and Explainability, Ethics and Consent, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://jme.bmj.com/content/medethics/early/2021/05/21/medethics-2021-107255.full.pdf",
    "AI Applications": [],
    "Category": "Academic Institution",
    "predicted_specialty": "surgery, oncology, infectious_diseases",
    "Year": 2021,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://plasujalis.com/published_manuscripts/vol-2-1-2025/PLASUJALIS-4874-30-53.pdf",
    "AI Applications": "['Operational and Administrative Automation', 'Education and Training AI', 'Clinical Decision Support', 'Medical Imaging AI', 'Patient-facing AI', 'Robotics and Surgical AI', 'Research and Clinical Trial AI', 'Public Health AI', 'Clinical Documentation AI']",
    "Category": "Academic Institution",
    "predicted_specialty": "unclassified",
    "Year": 2025,
    "Focus Areas": "Bias and Fairness, Privacy and Security, Transparency and Explainability, Ethics and Consent, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.allmultidisciplinaryjournal.com/uploads/archives/20250523164743_F-21-124.1.pdf",
    "AI Applications": "['Public Health AI']",
    "Category": "Academic Institution",
    "predicted_specialty": "unclassified",
    "Year": 2021,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://ijarpr.com/uploads/V2ISSUE6/IJARPR0614.pdf",
    "AI Applications": "['Public Health AI']",
    "Category": "Academic Institution",
    "predicted_specialty": "infectious_diseases",
    "Year": 2025,
    "Focus Areas": "Bias and Fairness, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.ama-assn.org/system/files/omss-ai-medical-staff.pdf",
    "AI Applications": "['Education and Training AI', 'Operational and Administrative Automation', 'Robotics and Surgical AI', 'Clinical Documentation AI']",
    "Category": "Professional Medical Organization",
    "predicted_specialty": "unclassified",
    "Year": 2024,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability",
    "State": ""
  },
  {
    "URL": "https://www.fda.gov/files/guidance%20documents/published/Master-Protocols-Efficient-Clinical-Trial-Design-Strategies_1.pdf",
    "AI Applications": [],
    "Category": "Federal",
    "predicted_specialty": "oncology, pulmonology",
    "Year": 2018,
    "Focus Areas": "Reliability and Performance, Safety and Risk Management",
    "State": ""
  },
  {
    "URL": "https://millionhearts.hhs.gov/files/HTN_Change_Package.pdf",
    "AI Applications": [],
    "Category": "Federal",
    "predicted_specialty": "cardiology, nephrology",
    "Year": 2020,
    "Focus Areas": "Reliability and Performance, Safety and Risk Management",
    "State": ""
  },
  {
    "URL": "https://www.cms.hhs.gov/manuals/downloads/pim83c06.pdf",
    "AI Applications": [],
    "Category": "Federal",
    "predicted_specialty": "unclassified",
    "Year": 1998,
    "Focus Areas": "Reliability and Performance, Privacy and Security, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.cms.hhs.gov/transmittals/downloads/R1418CP.pdf",
    "AI Applications": [],
    "Category": "Federal",
    "predicted_specialty": "unclassified",
    "Year": 2008,
    "Focus Areas": "Reliability and Performance, Privacy and Security, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "http://www.ncvhs.hhs.gov/wp-content/uploads/2014/05/001030h2.pdf",
    "AI Applications": [],
    "Category": "Federal",
    "predicted_specialty": "unclassified",
    "Year": 2000,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Safety and Risk Management",
    "State": ""
  },
  {
    "URL": "https://www.ncvhs.hhs.gov/wp-content/uploads/2014/05/111116lt1.pdf",
    "AI Applications": [],
    "Category": "Federal",
    "predicted_specialty": "unclassified",
    "Year": "",
    "Focus Areas": "Bias and Fairness, Privacy and Security, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.aspe.hhs.gov/sites/default/files/migrated_legacy_files/42166/chc.pdf",
    "AI Applications": [],
    "Category": "Federal",
    "predicted_specialty": "endocrinology, psychiatry",
    "Year": 2005,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Ethics and Consent, Safety and Risk Management",
    "State": ""
  },
  {
    "URL": "http://www.ncvhs.hhs.gov/wp-content/uploads/2014/05/990329ta.pdf",
    "AI Applications": [],
    "Category": "Federal",
    "predicted_specialty": "unclassified",
    "Year": 1999,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.healthit.gov/sites/default/files/acds-lessons-in-cds-implementation-deliverablev2.pdf",
    "AI Applications": "['Clinical Decision Support']",
    "Category": "Federal",
    "predicted_specialty": "cardiology, endocrinology",
    "Year": "",
    "Focus Areas": "Reliability and Performance, Privacy and Security, Safety and Risk Management",
    "State": ""
  },
  {
    "URL": "https://www.healthit.gov/sites/default/files/safer_cpoe.pdf",
    "AI Applications": [],
    "Category": "Federal",
    "predicted_specialty": "unclassified",
    "Year": 2016,
    "Focus Areas": "Bias and Fairness, Privacy and Security, Ethics and Consent, Safety and Risk Management",
    "State": ""
  },
  {
    "URL": "https://www.healthit.gov/sites/default/files/resources/changemanagementprimer_feb2014.pdf",
    "AI Applications": [],
    "Category": "Federal",
    "predicted_specialty": "unclassified",
    "Year": 2013,
    "Focus Areas": "Reliability and Performance, Privacy and Security, Ethics and Consent, Safety and Risk Management",
    "State": ""
  },
  {
    "URL": "https://www.healthit.gov/sites/default/files/hit_lessons_learned_lit_review_final_08-01-2013.pdf",
    "AI Applications": [],
    "Category": "Federal",
    "predicted_specialty": "unclassified",
    "Year": 2013,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Safety and Risk Management",
    "State": ""
  },
  {
    "URL": "https://www.healthit.gov/sites/default/files/2016_report_to_congress_on_healthit_progress.pdf",
    "AI Applications": [],
    "Category": "Federal",
    "predicted_specialty": "unclassified",
    "Year": 2016,
    "Focus Areas": "Bias and Fairness, Privacy and Security, Ethics and Consent, Safety and Risk Management",
    "State": ""
  },
  {
    "URL": "https://www.healthit.gov/sites/default/files/ONC10yearInteroperabilityConceptPaper.pdf",
    "AI Applications": "['Clinical Decision Support']",
    "Category": "Federal",
    "predicted_specialty": "unclassified",
    "Year": 2024,
    "Focus Areas": "Bias and Fairness, Privacy and Security, Ethics and Consent, Safety and Risk Management",
    "State": ""
  },
  {
    "URL": "https://www.healthit.gov/sites/default/files/comments/acp_comment_letter_to_onc_on_draft_roadmap-final-2015-04-02.pdf",
    "AI Applications": [],
    "Category": "Federal",
    "predicted_specialty": "unclassified",
    "Year": 2015,
    "Focus Areas": "Bias and Fairness, Privacy and Security, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.healthit.gov/sites/default/files/clinical-decision-support-0913.pdf",
    "AI Applications": "['Clinical Decision Support']",
    "Category": "Federal",
    "predicted_specialty": "unclassified",
    "Year": 2013,
    "Focus Areas": "Reliability and Performance, Privacy and Security, Safety and Risk Management",
    "State": ""
  },
  {
    "URL": "https://www.healthit.gov/sites/default/files/page/2019-04/AHAEHRUseDataBrief.pdf",
    "AI Applications": [],
    "Category": "Federal",
    "predicted_specialty": "unclassified",
    "Year": 2015,
    "Focus Areas": "Reliability and Performance, Ethics and Consent, Safety and Risk Management",
    "State": ""
  },
  {
    "URL": "https://digirepo.nlm.nih.gov/master/borndig/101719884/ucm514771.pdf",
    "AI Applications": [],
    "Category": "Federal",
    "predicted_specialty": "unclassified",
    "Year": 2017,
    "Focus Areas": "Reliability and Performance, Privacy and Security, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://digirepo.nlm.nih.gov/master/borndig/101734178/UCM268555.pdf",
    "AI Applications": [],
    "Category": "Federal",
    "predicted_specialty": "radiology",
    "Year": 2018,
    "Focus Areas": "Reliability and Performance, Safety and Risk Management",
    "State": ""
  },
  {
    "URL": "https://digirepo.nlm.nih.gov/master/borndig/101719885/ucm514737.pdf",
    "AI Applications": [],
    "Category": "Federal",
    "predicted_specialty": "unclassified",
    "Year": 2016,
    "Focus Areas": "Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://digirepo.nlm.nih.gov/master/borndig/9918627775006676/9918627775006676.pdf",
    "AI Applications": [],
    "Category": "Federal",
    "predicted_specialty": "unclassified",
    "Year": 2023,
    "Focus Areas": "Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.ncbi.nlm.nih.gov/books/NBK209539/pdf/Bookshelf_NBK209539.pdf",
    "AI Applications": "['Clinical Decision Support']",
    "Category": "Federal",
    "predicted_specialty": "surgery, Obstetrics_Gynecology, oncology, radiology, cardiology, gastroenterology, endocrinology, pulmonology, nephrology, hematology, psychiatry, pediatrics, neurology, infectious_diseases",
    "Year": 2011,
    "Focus Areas": "Reliability and Performance, Privacy and Security, Ethics and Consent, Safety and Risk Management",
    "State": ""
  },
  {
    "URL": "https://www.ncbi.nlm.nih.gov/books/NBK269030/pdf/Bookshelf_NBK269030.pdf",
    "AI Applications": [],
    "Category": "Federal",
    "predicted_specialty": "oncology, radiology, cardiology, pulmonology, psychiatry, neurology, infectious_diseases",
    "Year": 2015,
    "Focus Areas": "Reliability and Performance, Ethics and Consent, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://lhncbc.nlm.nih.gov/LHC-publications/PDF/tr2005003.pdf",
    "AI Applications": [],
    "Category": "Federal",
    "predicted_specialty": "psychiatry",
    "Year": 2005,
    "Focus Areas": "Reliability and Performance, Privacy and Security, Ethics and Consent, Safety and Risk Management",
    "State": ""
  },
  {
    "URL": "https://nvlpubs.nist.gov/nistpubs/legacy/sp/nistspecialpublication800-122.pdf",
    "AI Applications": [],
    "Category": "Federal",
    "predicted_specialty": "unclassified",
    "Year": 2010,
    "Focus Areas": "Bias and Fairness, Privacy and Security, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://nvlpubs.nist.gov/nistpubs/ir/2017/NIST.IR.8166.pdf",
    "AI Applications": [],
    "Category": "Federal",
    "predicted_specialty": "surgery, cardiology, infectious_diseases",
    "Year": 2017,
    "Focus Areas": "Reliability and Performance, Privacy and Security, Ethics and Consent, Safety and Risk Management",
    "State": ""
  },
  {
    "URL": "https://www.cms.gov/Medicare/CMS-Forms/CMS-Forms/downloads/cms855i.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "surgery",
    "Year": "",
    "Focus Areas": "Reliability and Performance, Privacy and Security, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.cms.gov/Regulations-and-Guidance/Guidance/Manuals/downloads/pim83c06.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "unclassified",
    "Year": 1998,
    "Focus Areas": "Reliability and Performance, Privacy and Security, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.cms.gov/Research-Statistics-Data-and-Systems/Statistics-Trends-and-Reports/Reports/downloads/HHP4P_Demo_Eval_2008_Vol2.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "surgery, endocrinology, pulmonology",
    "Year": 2009,
    "Focus Areas": "Reliability and Performance, Privacy and Security, Safety and Risk Management",
    "State": ""
  },
  {
    "URL": "https://medicaid.alabama.gov/documents/9.0_Resources/9.2_Administrative_Code/9.2.1_Proposed_Agency_Rules/9.2.1_APA_18_560-X-6-.13%20Covered%20Services%20-%20Details%20on%20Selected%20Services.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "surgery, Obstetrics_Gynecology, psychiatry, pediatrics",
    "Year": 2018,
    "Focus Areas": "Reliability and Performance, Privacy and Security, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": "Alabama"
  },
  {
    "URL": "https://mh.alabama.gov/wp-content/uploads/2023/06/580-2-20-With-Changes-Effective-June-12-2023.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "psychiatry",
    "Year": 2023,
    "Focus Areas": "Reliability and Performance, Privacy and Security, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": "Alabama"
  },
  {
    "URL": "https://nciaboard.az.gov/sites/default/files/media/ADHS%20Rules%20Article%201%20-%20Effective%2011-5-2019_0.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "surgery, pulmonology, nephrology, psychiatry, infectious_diseases",
    "Year": 2019,
    "Focus Areas": "Privacy and Security, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": "Arizona"
  },
  {
    "URL": "https://www.cdph.ca.gov/Programs/CHCQ/LCP/CDPH%20Document%20Library/AFL-20-08-Attachment-02.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "pulmonology, infectious_diseases",
    "Year": "",
    "Focus Areas": "Privacy and Security, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": "California"
  },
  {
    "URL": "https://portal.ct.gov/-/media/departments-and-agencies/dph/dph/public_health_code/sections/1913d66to1913d79homehealthcareagenciespdf.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "unclassified",
    "Year": 2006,
    "Focus Areas": "Privacy and Security, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": "Connecticut"
  },
  {
    "URL": "https://dhss.delaware.gov/wp-content/uploads/sites/5/ddds/pdf/DMAP_General_Policy_Manual.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "unclassified",
    "Year": 2002,
    "Focus Areas": "Reliability and Performance, Privacy and Security, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": "Delaware"
  },
  {
    "URL": "https://ahca.myflorida.com/content/download/5923/file/59G-1.060_Enrollment.pdf",
    "AI Applications": [],
    "Category": "Professional Medical Organization",
    "predicted_specialty": "surgery, nephrology, psychiatry, pediatrics",
    "Year": 2022,
    "Focus Areas": "Reliability and Performance, Privacy and Security, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": "Florida"
  },
  {
    "URL": "https://ahca.myflorida.com/medicaid/review/specific/cl_10_100601_dme_ver1_0.pdf",
    "AI Applications": [],
    "Category": "Professional Medical Organization",
    "predicted_specialty": "surgery, cardiology, pathology, pulmonology, pediatrics",
    "Year": 2010,
    "Focus Areas": "Reliability and Performance, Privacy and Security, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": "Florida"
  },
  {
    "URL": "https://ahca.myflorida.com/MCHQ/Health_Facility_Regulation/Commercial_Managed_Care/docs/59A_23final.pdf",
    "AI Applications": [],
    "Category": "Professional Medical Organization",
    "predicted_specialty": "unclassified",
    "Year": "",
    "Focus Areas": "Reliability and Performance, Privacy and Security, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": "Florida"
  },
  {
    "URL": "https://ahca.myflorida.com/content/download/7252/file/Home%20Health%20Agencies.pdf",
    "AI Applications": [],
    "Category": "Professional Medical Organization",
    "predicted_specialty": "endocrinology, pulmonology, psychiatry, pediatrics, neurology",
    "Year": 2024,
    "Focus Areas": "Privacy and Security, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": "Florida"
  },
  {
    "URL": "https://ahca.myflorida.com/medicaid/review/specific/cl_07_070601_mh_case_mgmt_ver2_2.pdf",
    "AI Applications": [],
    "Category": "Professional Medical Organization",
    "predicted_specialty": "psychiatry",
    "Year": 2007,
    "Focus Areas": "Reliability and Performance, Privacy and Security, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": "Florida"
  },
  {
    "URL": "https://ahca.myflorida.com/medicaid/review/Specific/59G-4-261_Private_Duty_Nursing_Services_Coverage_Policy.pdf",
    "AI Applications": [],
    "Category": "Professional Medical Organization",
    "predicted_specialty": "unclassified",
    "Year": 2024,
    "Focus Areas": "Reliability and Performance, Privacy and Security, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": "Florida"
  },
  {
    "URL": "https://ahca.myflorida.com/medicaid/review/Reimbursement/RH_08_080701_CMS-1500_ver1_4.pdf",
    "AI Applications": [],
    "Category": "Professional Medical Organization",
    "predicted_specialty": "surgery, Obstetrics_Gynecology, psychiatry, pediatrics",
    "Year": 2008,
    "Focus Areas": "Reliability and Performance, Privacy and Security, Safety and Risk Management, Governance Committees",
    "State": "Florida"
  },
  {
    "URL": "https://ahca.myflorida.com/medicaid/review/General/59G_1010_Definitions.pdf",
    "AI Applications": [],
    "Category": "Professional Medical Organization",
    "predicted_specialty": "unclassified",
    "Year": 2024,
    "Focus Areas": "Reliability and Performance, Privacy and Security, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": "Florida"
  },
  {
    "URL": "https://ahca.myflorida.com/content/download/7245/file/core_st_c.pdf",
    "AI Applications": [],
    "Category": "Professional Medical Organization",
    "predicted_specialty": "neurology, infectious_diseases",
    "Year": 2024,
    "Focus Areas": "Privacy and Security, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": "Florida"
  },
  {
    "URL": "https://dch.georgia.gov/sites/dch.georgia.gov/files/imported/vgn/images/portal/cit_1210/23/9/153576202DCH_ASCApplicationPacket.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "surgery",
    "Year": "",
    "Focus Areas": "Privacy and Security, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": "Georgia"
  },
  {
    "URL": "https://labor.hawaii.gov/dcd/files/2012/11/MFS-RULES-WEB.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "surgery",
    "Year": "",
    "Focus Areas": "Reliability and Performance, Privacy and Security, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": "Hawaii"
  },
  {
    "URL": "https://health.hawaii.gov/opppd/files/2022/12/2023-Primary-Care-Office-Legislative-Report.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "unclassified",
    "Year": 2023,
    "Focus Areas": "Reliability and Performance, Privacy and Security, Safety and Risk Management",
    "State": "Hawaii"
  },
  {
    "URL": "https://dcr.hawaii.gov/wp-content/uploads/2023/11/Application-Instructions-SSP-Practitioners.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "unclassified",
    "Year": "",
    "Focus Areas": "Reliability and Performance, Privacy and Security, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": "Hawaii"
  },
  {
    "URL": "https://doi.idaho.gov/wp-content/uploads/2021/04/CMS-No-Surprises-Act-Provider-Information.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "unclassified",
    "Year": 2021,
    "Focus Areas": "Privacy and Security, Ethics and Consent, Safety and Risk Management",
    "State": "Idaho"
  },
  {
    "URL": "https://dcfs.illinois.gov/content/dam/soi/en/web/dcfs/documents/about-us/policy-rules-and-forms/documents/policy-guide/policy-guide-2025-01-clinical-staffing-and-consultation-process.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "psychiatry",
    "Year": 2025,
    "Focus Areas": "Reliability and Performance, Privacy and Security, Ethics and Consent, Safety and Risk Management",
    "State": "Illinois"
  },
  {
    "URL": "https://iwcc.illinois.gov/content/dam/soi/en/web/iwcc/documents/fslaw.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "surgery",
    "Year": "",
    "Focus Areas": "Reliability and Performance, Privacy and Security, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": "Illinois"
  },
  {
    "URL": "https://hfs.illinois.gov/content/dam/soi/en/web/hfs/medicalprograms/mfp/documents/mfp_operationalprotocol.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "cardiology, endocrinology, pulmonology, psychiatry, neurology",
    "Year": 2013,
    "Focus Areas": "Reliability and Performance, Privacy and Security, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": "Illinois"
  },
  {
    "URL": "https://www.in.gov/health/files/18_SHA-SHIP-FINAL-DOC_v5.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "Obstetrics_Gynecology, oncology, cardiology, gastroenterology, endocrinology, pulmonology, psychiatry, pediatrics, infectious_diseases",
    "Year": 2018,
    "Focus Areas": "Bias and Fairness, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": "Indiana"
  },
  {
    "URL": "https://www.in.gov/health/files/ARTICLE-17.-HOME-HEALTH-AGENCIES.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "unclassified",
    "Year": 2002,
    "Focus Areas": "Privacy and Security, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": "Indiana"
  },
  {
    "URL": "https://www.in.gov/medicaid/providers/files/modules/behavioral-health-services.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "Obstetrics_Gynecology, psychiatry, neurology",
    "Year": 2025,
    "Focus Areas": "Reliability and Performance, Privacy and Security, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": "Indiana"
  },
  {
    "URL": "https://www.in.gov/dcs/files/8.30-Archived-6-30-23-v5.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "psychiatry",
    "Year": 2022,
    "Focus Areas": "Reliability and Performance, Privacy and Security, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": "Indiana"
  },
  {
    "URL": "https://www.legis.iowa.gov/docs/iac/chapter/07-20-2016.653.13.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "unclassified",
    "Year": 2001,
    "Focus Areas": "Reliability and Performance, Privacy and Security, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": "Iowa"
  },
  {
    "URL": "https://www.legis.iowa.gov/docs/ico/chapter/514F.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "unclassified",
    "Year": 2007,
    "Focus Areas": "Reliability and Performance, Privacy and Security, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": "Iowa"
  },
  {
    "URL": "https://kbn.ky.gov/KBN%20Documents/aos14-implementation-of-patient-care-orders.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "unclassified",
    "Year": 2015,
    "Focus Areas": "Reliability and Performance, Privacy and Security, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": "Kentucky"
  },
  {
    "URL": "https://insurance.ky.gov/PPC/Documents/2020UM_%20LimitedSelfFundedReviewGuide.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "unclassified",
    "Year": 2020,
    "Focus Areas": "Reliability and Performance, Privacy and Security, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": "Kentucky"
  },
  {
    "URL": "https://finance.ky.gov/eProcurement/WellCareResponse/22.%20Attachment%20C.12.f.ii-1%20Sample%20Enrollee%20Handbook.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "unclassified",
    "Year": 2019,
    "Focus Areas": "Reliability and Performance, Privacy and Security, Ethics and Consent, Safety and Risk Management",
    "State": "Kentucky"
  },
  {
    "URL": "http://dhh.louisiana.gov/assets/medicaid/hss/docs/HSS_Hospital/Regulations/Chapter_93_Hospitals.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "surgery, Obstetrics_Gynecology, radiology, cardiology, pathology, pulmonology, psychiatry, pediatrics, infectious_diseases",
    "Year": "",
    "Focus Areas": "Privacy and Security, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": "Louisiana"
  },
  {
    "URL": "https://www.maine.gov/ems/sites/maine.gov.ems/files/inline-files/guideinterfacilitytransfers.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "pediatrics",
    "Year": 2006,
    "Focus Areas": "Reliability and Performance, Privacy and Security, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": "Maine"
  },
  {
    "URL": "https://www.maine.gov/suicide/docs/Action-Alliance-Recommended-Standard-Care.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "psychiatry",
    "Year": 2018,
    "Focus Areas": "Privacy and Security, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": "Maine"
  },
  {
    "URL": "https://www.maine.gov/ems/sites/maine.gov.ems/files/inline-files/20230522-Maine-EMS-Vision-and-Plan.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "psychiatry",
    "Year": 2035,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": "Maine"
  },
  {
    "URL": "https://mhcc.maryland.gov/mhcc/pages/home/meeting_schedule/documents/updates/2017/MHCC_updt_20170518.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "unclassified",
    "Year": 2017,
    "Focus Areas": "Reliability and Performance, Privacy and Security, Safety and Risk Management",
    "State": "Maryland"
  },
  {
    "URL": "https://www.health.mn.gov/diseases/hiv/partners/careware/registration.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "unclassified",
    "Year": 2023,
    "Focus Areas": "Reliability and Performance, Privacy and Security, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": "Minnesota"
  },
  {
    "URL": "https://www.mid.ms.gov/wp-content/uploads/2024/06/ur.reg_.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "unclassified",
    "Year": 2024,
    "Focus Areas": "Reliability and Performance, Privacy and Security, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": "Mississippi"
  },
  {
    "URL": "https://msdh.ms.gov/page/resources/264.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "pulmonology",
    "Year": 2023,
    "Focus Areas": "Privacy and Security, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": "Mississippi"
  },
  {
    "URL": "https://msdh.ms.gov/page/resources/1339.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "unclassified",
    "Year": 2016,
    "Focus Areas": "Reliability and Performance, Privacy and Security, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": "Mississippi"
  },
  {
    "URL": "https://medicaid.ms.gov/wp-content/uploads/2022/09/200901.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "unclassified",
    "Year": 2009,
    "Focus Areas": "Reliability and Performance, Privacy and Security, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": "Mississippi"
  },
  {
    "URL": "https://www.sos.mo.gov/cmsimages/adrules/csr/current/20csr/20c2150-5.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "unclassified",
    "Year": 2024,
    "Focus Areas": "Reliability and Performance, Privacy and Security, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": "Missouri"
  },
  {
    "URL": "https://dss.mo.gov/mhd/general/pdf/missouri-medicaid-health-information-technology-plan.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "psychiatry",
    "Year": 2017,
    "Focus Areas": "Reliability and Performance, Privacy and Security, Safety and Risk Management",
    "State": "Missouri"
  },
  {
    "URL": "http://health.mo.gov/living/healthcondiseases/chronic/tcdsystem/pdf/TimeCriticalDiagnosisReport.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "cardiology",
    "Year": 2007,
    "Focus Areas": "Reliability and Performance, Privacy and Security, Safety and Risk Management, Governance Committees",
    "State": "Missouri"
  },
  {
    "URL": "https://dss.mo.gov/mhd/mc/qai/pdf/qai-minutes-101818.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "pediatrics",
    "Year": 2018,
    "Focus Areas": "Reliability and Performance, Privacy and Security, Safety and Risk Management, Governance Committees",
    "State": "Missouri"
  },
  {
    "URL": "https://sos.nebraska.gov/sites/default/files/doc/elections/2024/2024%20Ballot%20Measures%20Pamphlet.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "unclassified",
    "Year": 2024,
    "Focus Areas": "Privacy and Security, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": "Nebraska"
  },
  {
    "URL": "https://www.nebraska.gov/nesos/rules-and-regs/regtrack/proposals/2671.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "surgery, psychiatry, pediatrics, neurology, infectious_diseases",
    "Year": 2023,
    "Focus Areas": "Privacy and Security, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": "Nebraska"
  },
  {
    "URL": "https://www.nebraska.gov/nesos/rules-and-regs/regtrack/proposals/2524.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "unclassified",
    "Year": 2022,
    "Focus Areas": "Privacy and Security, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": "Nebraska"
  },
  {
    "URL": "http://govdocs.nebraska.gov/epubs/U4920/B006.0002-2000.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "unclassified",
    "Year": 2000,
    "Focus Areas": "Reliability and Performance, Privacy and Security, Safety and Risk Management",
    "State": "Nebraska"
  },
  {
    "URL": "https://hr.nv.gov/uploadedFiles/hrnvgov/Content/Resources/Publications/FMLA%20overview513v%202.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "Obstetrics_Gynecology",
    "Year": 2015,
    "Focus Areas": "Reliability and Performance, Privacy and Security, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": "Nevada"
  },
  {
    "URL": "https://www.nj.gov/health/forms/NJAC%20%20%208%2043G%20licensing%20standards.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "surgery, Obstetrics_Gynecology, oncology, radiology, cardiology, pathology, gastroenterology, pulmonology, nephrology, psychiatry, pediatrics, ophthalmology, infectious_diseases",
    "Year": 2000,
    "Focus Areas": "Reliability and Performance, Privacy and Security, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": "New Jersey"
  },
  {
    "URL": "https://www.hca.nm.gov/wp-content/uploads/2023-PCC-Strategic-Plan.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "psychiatry",
    "Year": 2023,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Safety and Risk Management, Governance Committees",
    "State": "New Mexico"
  },
  {
    "URL": "https://www.srca.nm.gov/wp-content/uploads/attachments/07.027.0007.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "surgery, pediatrics",
    "Year": "",
    "Focus Areas": "Reliability and Performance, Privacy and Security, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": "New Mexico"
  },
  {
    "URL": "https://www.health.ny.gov/health_care/managed_care/docs/quality_strategy.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "Obstetrics_Gynecology, endocrinology, pulmonology, psychiatry",
    "Year": "",
    "Focus Areas": "Reliability and Performance, Privacy and Security, Safety and Risk Management, Governance Committees",
    "State": "New York"
  },
  {
    "URL": "https://oasas.ny.gov/system/files/documents/2024/12/apg-manual.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "psychiatry",
    "Year": 2024,
    "Focus Areas": "Reliability and Performance, Privacy and Security, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": "New York"
  },
  {
    "URL": "https://ag.ny.gov/sites/default/files/opinions/2003-F1_pw.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "unclassified",
    "Year": 2003,
    "Focus Areas": "Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": "New York"
  },
  {
    "URL": "https://www.nctracks.nc.gov/content/dam/jcr:fdfc2388-c401-40bb-8c97-488d6ca35631/NCMMIS_WPDT_OPS_04.24.24_Prov%20Claims%20-%20Billing%20Assist%20Guide_W7.3.1F.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "psychiatry",
    "Year": 2024,
    "Focus Areas": "Reliability and Performance, Privacy and Security, Safety and Risk Management",
    "State": "North Carolina"
  },
  {
    "URL": "https://www.hhs.nd.gov/sites/www/files/documents/medicaid-policies/physician-services.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "surgery",
    "Year": 2025,
    "Focus Areas": "Reliability and Performance, Privacy and Security, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": "North Dakota"
  },
  {
    "URL": "https://managedcare.medicaid.ohio.gov/static/PNM/PNM-FAQ.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "unclassified",
    "Year": "",
    "Focus Areas": "Reliability and Performance, Privacy and Security, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": "Ohio"
  },
  {
    "URL": "https://www.oregon.gov/odhs/rules-policy/apdrules/411-086.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "neurology, infectious_diseases",
    "Year": 2024,
    "Focus Areas": "Privacy and Security, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": "Oregon"
  },
  {
    "URL": "https://www.pa.gov/content/dam/copapwp-pagov/en/dos/department-and-offices/bpoa/nursing/CRNP-Prescriptive-Authority-Collaborative-Agreement-Change-Request-Guide.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "unclassified",
    "Year": "",
    "Focus Areas": "Reliability and Performance, Privacy and Security, Ethics and Consent, Safety and Risk Management",
    "State": "Pennsylvania"
  },
  {
    "URL": "https://www.pa.gov/content/dam/copapwp-pagov/en/health/documents/topics/documents/laws-and-regulations/Rules_Regulations.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "unclassified",
    "Year": 1987,
    "Focus Areas": "Privacy and Security, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": "Pennsylvania"
  },
  {
    "URL": "https://www.pa.gov/content/dam/copapwp-pagov/en/cor/documents/about-us/doc-policies/13.01.01%20Management%20and%20Administration%20of%20Health%20Care.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "surgery, psychiatry, infectious_diseases",
    "Year": 2024,
    "Focus Areas": "Privacy and Security, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": "Pennsylvania"
  },
  {
    "URL": "https://www.pa.gov/content/dam/copapwp-pagov/en/dhs/documents/providers/clearances-and-licensing/documents/mh-residential-licensing/omhsas-psychiatric-outpatient-clinic-regulatory-compliance-guide-updated-11-04-2024.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "psychiatry",
    "Year": 2024,
    "Focus Areas": "Reliability and Performance, Privacy and Security, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": "Pennsylvania"
  },
  {
    "URL": "https://bhddh.ri.gov/sites/g/files/xkgbur411/files/2021-03/Know_Your_Rights_Brochure_0110.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "psychiatry",
    "Year": 2009,
    "Focus Areas": "Privacy and Security, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": "Rhode Island"
  },
  {
    "URL": "https://health.ri.gov/sites/g/files/xkgbur1006/files/publications/generalassemblyreports/2016HealthCareQualityReportingProgram.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "infectious_diseases",
    "Year": 2017,
    "Focus Areas": "Reliability and Performance, Privacy and Security, Safety and Risk Management, Governance Committees",
    "State": "Rhode Island"
  },
  {
    "URL": "https://ohic.ri.gov/sites/g/files/xkgbur736/files/2023-12/Primary%20Care%20in%20Rhode%20Island%20-%20Current%20Status%20and%20Policy%20Recommendations%20December%202023.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "unclassified",
    "Year": 2023,
    "Focus Areas": "Reliability and Performance, Privacy and Security, Safety and Risk Management, Governance Committees",
    "State": "Rhode Island"
  },
  {
    "URL": "https://health.ri.gov/sites/g/files/xkgbur1006/files/publications/annualreports/HealthInformationTechnologyPhysicanSurveySummary.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "unclassified",
    "Year": 2021,
    "Focus Areas": "Reliability and Performance, Privacy and Security, Ethics and Consent, Safety and Risk Management",
    "State": "Rhode Island"
  },
  {
    "URL": "https://www.dshs.texas.gov/sites/default/files/legislative/2021-Reports/2021-State-Plan-for-Diabetes-and-Obesity-Treatment-and-Education.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "endocrinology",
    "Year": 2021,
    "Focus Areas": "Reliability and Performance, Privacy and Security, Safety and Risk Management, Governance Committees",
    "State": "Texas"
  },
  {
    "URL": "https://medicaid-documents.dhhs.utah.gov/Documents%2Fmanuals%2Fpdfs%2FMedicaid+Provider+Manuals%2FAll+Providers+General+Information+Section+I%2FAllProvidersGeneralInfo_Section_1.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "surgery, Obstetrics_Gynecology, psychiatry, pediatrics",
    "Year": 2025,
    "Focus Areas": "Reliability and Performance, Privacy and Security, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": "Utah"
  },
  {
    "URL": "https://www.utah.gov/pmn/files/946091.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "unclassified",
    "Year": 2023,
    "Focus Areas": "Privacy and Security, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": "Utah"
  },
  {
    "URL": "https://dfr.vermont.gov/sites/finreg/files/regbul/dfr-regulation-health-h-2011-01-mental-health-review-agents.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "psychiatry",
    "Year": 2011,
    "Focus Areas": "Reliability and Performance, Privacy and Security, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": "Vermont"
  },
  {
    "URL": "https://humanservices.vermont.gov/sites/ahsnew/files/MedicaidCoveredServicesRules_20190306.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "surgery, Obstetrics_Gynecology, radiology, cardiology, psychiatry, pediatrics",
    "Year": 2018,
    "Focus Areas": "Reliability and Performance, Privacy and Security, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": "Vermont"
  },
  {
    "URL": "https://gmcboard.vermont.gov/gmcboard/doc/sites/gmcb/files/files/payment-reform/APM-FINAL-Justification.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "unclassified",
    "Year": 2016,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Safety and Risk Management, Governance Committees",
    "State": "Vermont"
  },
  {
    "URL": "https://www.dmas.virginia.gov/media/6244/cardinal-care-managed-care-model-member-handbook-oct-1-2023.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "Obstetrics_Gynecology, psychiatry",
    "Year": 2023,
    "Focus Areas": "Privacy and Security, Ethics and Consent, Safety and Risk Management",
    "State": "Virginia"
  },
  {
    "URL": "https://wmc.wa.gov/sites/default/files/public/WMCUpdateFall2018.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "unclassified",
    "Year": 2018,
    "Focus Areas": "Reliability and Performance, Privacy and Security, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": "Washington"
  },
  {
    "URL": "https://dhhr.wv.gov/hpcd/FocusAreas/Documents/Obesity%20Model%20Framework.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "unclassified",
    "Year": 2016,
    "Focus Areas": "Bias and Fairness, Privacy and Security, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": "West Virginia"
  },
  {
    "URL": "https://docs.legis.wisconsin.gov/code/admin_code/dhs/030/35.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "psychiatry",
    "Year": 2009,
    "Focus Areas": "Privacy and Security, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": "Wisconsin"
  },
  {
    "URL": "https://dl.icdst.org/pdfs/files3/c0d13a4f4dd34248f7e077c6e4d87976.pdf",
    "AI Applications": [],
    "Category": "Professional Medical Organization",
    "predicted_specialty": "unclassified",
    "Year": 2013,
    "Focus Areas": "Reliability and Performance, Privacy and Security, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.nachc.org/wp-content/uploads/2024/07/HTN_Change_Package.pdf",
    "AI Applications": [],
    "Category": "Professional Medical Organization",
    "predicted_specialty": "cardiology, nephrology",
    "Year": 2020,
    "Focus Areas": "Reliability and Performance, Safety and Risk Management",
    "State": ""
  },
  {
    "URL": "https://onf.ons.org/system/files/journal-article-pdfs/NeussJanuary2017.pdf",
    "AI Applications": [],
    "Category": "Professional Medical Organization",
    "predicted_specialty": "oncology, hematology, pediatrics",
    "Year": 2016,
    "Focus Areas": "Reliability and Performance, Privacy and Security, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://escholarship.org/content/qt4z93b5zq/qt4z93b5zq.pdf",
    "AI Applications": [],
    "Category": "Academic Institution",
    "predicted_specialty": "unclassified",
    "Year": 2010,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.jpands.org/vol16no4/rosenwasser.pdf",
    "AI Applications": [],
    "Category": "Nonprofit",
    "predicted_specialty": "unclassified",
    "Year": 2011,
    "Focus Areas": "Reliability and Performance, Privacy and Security, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://biotech.law.lsu.edu/cases/medstaff/1873.pdf",
    "AI Applications": [],
    "Category": "Professional Medical Organization",
    "predicted_specialty": "surgery",
    "Year": 2009,
    "Focus Areas": "Privacy and Security, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "http://medecon.pbworks.com/f/CDS+1.pdf",
    "AI Applications": "['Clinical Decision Support']",
    "Category": "Professional Medical Organization",
    "predicted_specialty": "unclassified",
    "Year": 2009,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Safety and Risk Management",
    "State": ""
  },
  {
    "URL": "https://bmjleader.bmj.com/content/leader/early/2023/03/07/leader-2022-000709.full.pdf",
    "AI Applications": [],
    "Category": "Academic Institution",
    "predicted_specialty": "unclassified",
    "Year": 2022,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://hrgradcapstone.oucreate.com/wp-content/uploads/2023/10/Rule-Making-Paper.pdf",
    "AI Applications": [],
    "Category": "Professional Medical Organization",
    "predicted_specialty": "unclassified",
    "Year": 2015,
    "Focus Areas": "Bias and Fairness, Privacy and Security, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "http://www.tafpublications.com/gip_content/paper/jahss-2.5.1.pdf",
    "AI Applications": [],
    "Category": "Academic Institution",
    "predicted_specialty": "unclassified",
    "Year": 2016,
    "Focus Areas": "Bias and Fairness, Privacy and Security, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.ahima.org/media/pmcb0fr5/healthcare-data-governance-practice-brief-final.pdf",
    "AI Applications": [],
    "Category": "Professional Medical Organization",
    "predicted_specialty": "unclassified",
    "Year": 2020,
    "Focus Areas": "Bias and Fairness, Privacy and Security, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.ahima.org/media/sxflfny0/information-integrity-in-the-electronic-health-record_axs.pdf",
    "AI Applications": "['Clinical Decision Support']",
    "Category": "Professional Medical Organization",
    "predicted_specialty": "radiology",
    "Year": 2012,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.ahima.org/media/ztbfridh/cdi-toolkit-for-beginners_final.pdf",
    "AI Applications": [],
    "Category": "Academic Institution",
    "predicted_specialty": "unclassified",
    "Year": 2021,
    "Focus Areas": "Reliability and Performance, Privacy and Security, Ethics and Consent, Safety and Risk Management",
    "State": ""
  },
  {
    "URL": "https://www.ahima.org/media/qlkbu4ph/clinical-documentation-improvement-toolkit-2016-version-_axs.pdf",
    "AI Applications": [],
    "Category": "Professional Medical Organization",
    "predicted_specialty": "surgery, cardiology, pulmonology, ophthalmology, neurology, infectious_diseases",
    "Year": 2016,
    "Focus Areas": "Reliability and Performance, Privacy and Security, Ethics and Consent, Safety and Risk Management",
    "State": ""
  },
  {
    "URL": "https://www.ahima.org/media/clsfepxm/health-information-management-staff-transformation-toolkit_axs.pdf",
    "AI Applications": [],
    "Category": "Professional Medical Organization",
    "predicted_specialty": "unclassified",
    "Year": 2012,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Ethics and Consent, Safety and Risk Management",
    "State": ""
  },
  {
    "URL": "https://www.ahima.org/media/dsdgcfro/copy-functionality-toolkit-2016-update-_axs.pdf",
    "AI Applications": [],
    "Category": "Professional Medical Organization",
    "predicted_specialty": "surgery",
    "Year": 2016,
    "Focus Areas": "Privacy and Security, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.ahima.org/media/tf0ao3v1/release-of-information-toolkit_axs.pdf",
    "AI Applications": [],
    "Category": "Professional Medical Organization",
    "predicted_specialty": "psychiatry",
    "Year": 2013,
    "Focus Areas": "Privacy and Security, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "http://www.bioethics.net/wp-content/uploads/2020/03/72072_989943ddd0774e7aa1c01cc9d428b159.pdf",
    "AI Applications": [],
    "Category": "Federal",
    "predicted_specialty": "infectious_diseases",
    "Year": 2016,
    "Focus Areas": "Bias and Fairness, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.ama-assn.org/system/files/payor-contracting-toolkit.pdf",
    "AI Applications": [],
    "Category": "Professional Medical Organization",
    "predicted_specialty": "unclassified",
    "Year": 2021,
    "Focus Areas": "Reliability and Performance, Privacy and Security, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.ama-assn.org/system/files/2019-06/cpt-office-prolonged-svs-code-changes.pdf",
    "AI Applications": [],
    "Category": "Professional Medical Organization",
    "predicted_specialty": "unclassified",
    "Year": 2021,
    "Focus Areas": "Reliability and Performance, Privacy and Security, Ethics and Consent, Safety and Risk Management",
    "State": ""
  },
  {
    "URL": "https://www.ama-assn.org/system/files/2019-06/a19-yps-g-grid.pdf",
    "AI Applications": [],
    "Category": "Professional Medical Organization",
    "predicted_specialty": "unclassified",
    "Year": 2019,
    "Focus Areas": "Reliability and Performance, Privacy and Security, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.ama-assn.org/system/files/2022-prp-telehealth.pdf",
    "AI Applications": [],
    "Category": "Professional Medical Organization",
    "predicted_specialty": "surgery, psychiatry, infectious_diseases",
    "Year": 2022,
    "Focus Areas": "Reliability and Performance, Privacy and Security, Safety and Risk Management",
    "State": ""
  },
  {
    "URL": "https://www.ama-assn.org/system/files/prior-authorization-state-law-chart.pdf",
    "AI Applications": [],
    "Category": "Professional Medical Organization",
    "predicted_specialty": "unclassified",
    "Year": 2024,
    "Focus Areas": "Reliability and Performance, Privacy and Security, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.ama-assn.org/system/files/hhs-letter-and-appendix-to-providers.pdf",
    "AI Applications": [],
    "Category": "Professional Medical Organization",
    "predicted_specialty": "unclassified",
    "Year": 2024,
    "Focus Areas": "Reliability and Performance, Privacy and Security, Safety and Risk Management",
    "State": ""
  },
  {
    "URL": "https://www.ama-assn.org/system/files/2018-10/ama-chart-telemedicine-patient-physician-relationship.pdf",
    "AI Applications": [],
    "Category": "Professional Medical Organization",
    "predicted_specialty": "psychiatry",
    "Year": 2018,
    "Focus Areas": "Privacy and Security, Ethics and Consent, Safety and Risk Management",
    "State": ""
  },
  {
    "URL": "https://www.ama-assn.org/system/files/a22-bot09.pdf",
    "AI Applications": [],
    "Category": "Professional Medical Organization",
    "predicted_specialty": "unclassified",
    "Year": 2022,
    "Focus Areas": "Bias and Fairness, Privacy and Security, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://brand.amia.org/m/35b004ac7edf2230/original/EHI-Task-Force-Report_FINAL.pdf",
    "AI Applications": [],
    "Category": "Professional Medical Organization",
    "predicted_specialty": "unclassified",
    "Year": 2020,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://brand.amia.org/m/5ca41bc1f35db4ce/original/AMIA-Testifies-before-ONC-s-Privacy-Security-Tiger-Team.pdf",
    "AI Applications": [],
    "Category": "Academic Institution",
    "predicted_specialty": "unclassified",
    "Year": 2010,
    "Focus Areas": "Reliability and Performance, Transparency and Explainability, Safety and Risk Management",
    "State": ""
  },
  {
    "URL": "https://brand.amia.org/m/57022a3663c9aeff/original/AMIA-President-s-Letter-to-ONC-Regarding-Vendor-Agreements.pdf",
    "AI Applications": [],
    "Category": "Professional Medical Organization",
    "predicted_specialty": "unclassified",
    "Year": 2011,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://brand.amia.org/m/761a18c5494e6872/original/AMIA-Comments-on-Meaningful-Use.pdf",
    "AI Applications": [],
    "Category": "Professional Medical Organization",
    "predicted_specialty": "unclassified",
    "Year": 2010,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Safety and Risk Management",
    "State": ""
  },
  {
    "URL": "https://brand.amia.org/m/587ddb670333427d/original/AMIA-Response-Letter-to-Centers-for-Disease-Control-and-Prevention-CDC.pdf",
    "AI Applications": [],
    "Category": "Professional Medical Organization",
    "predicted_specialty": "unclassified",
    "Year": 2012,
    "Focus Areas": "Bias and Fairness, Privacy and Security, Ethics and Consent, Safety and Risk Management",
    "State": ""
  },
  {
    "URL": "https://www.himss.org/sites/hde/files/media/file/2024/06/11/interop_white-paper.pdf",
    "AI Applications": [],
    "Category": "Professional Medical Organization",
    "predicted_specialty": "unclassified",
    "Year": 2021,
    "Focus Areas": "Bias and Fairness, Privacy and Security, Safety and Risk Management",
    "State": ""
  },
  {
    "URL": "https://www.himss.org/sites/hde/files/media/file/2024/08/02/himss_interopframeworks_ebook-2.pdf",
    "AI Applications": [],
    "Category": "Professional Medical Organization",
    "predicted_specialty": "infectious_diseases",
    "Year": 2023,
    "Focus Areas": "Bias and Fairness, Privacy and Security, Ethics and Consent, Safety and Risk Management",
    "State": ""
  },
  {
    "URL": "https://www.aha.org/system/files/hpoe/Reports-HPOE/Metrics_Second_Curve_4_13.pdf",
    "AI Applications": [],
    "Category": "Professional Medical Organization",
    "predicted_specialty": "unclassified",
    "Year": 2013,
    "Focus Areas": "Reliability and Performance, Safety and Risk Management",
    "State": ""
  },
  {
    "URL": "https://www.aha.org/system/files/media/file/2019/02/MarketInsights_TeleHealthReport.pdf",
    "AI Applications": [],
    "Category": "Professional Medical Organization",
    "predicted_specialty": "psychiatry",
    "Year": 2019,
    "Focus Areas": "Reliability and Performance, Privacy and Security, Safety and Risk Management",
    "State": ""
  },
  {
    "URL": "https://www.aha.org/system/files/2018-02/regulatory-overload-report.pdf",
    "AI Applications": [],
    "Category": "Professional Medical Organization",
    "predicted_specialty": "unclassified",
    "Year": 2017,
    "Focus Areas": "Reliability and Performance, Privacy and Security, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.aha.org/system/files/media/file/2023/04/health-industry-cybersecurity-practices-managing-threats-and-protecting-patients-2023-by-healthcare-and-public-health-sector-coordinating-council.pdf",
    "AI Applications": [],
    "Category": "Professional Medical Organization",
    "predicted_specialty": "infectious_diseases",
    "Year": 2023,
    "Focus Areas": "Bias and Fairness, Privacy and Security, Ethics and Consent, Safety and Risk Management",
    "State": ""
  },
  {
    "URL": "https://www.aha.org/system/files/media/file/2023/06/OracleHealth_ClinicianExperience_exedialogue_060523.pdf",
    "AI Applications": [],
    "Category": "Professional Medical Organization",
    "predicted_specialty": "unclassified",
    "Year": 2023,
    "Focus Areas": "Reliability and Performance, Privacy and Security, Safety and Risk Management",
    "State": ""
  },
  {
    "URL": "https://www.aha.org/system/files/hpoe/Reports-HPOE/guide_to_physician_integration_models_for_sustainable_success.pdf",
    "AI Applications": [],
    "Category": "Professional Medical Organization",
    "predicted_specialty": "unclassified",
    "Year": 2012,
    "Focus Areas": "Reliability and Performance, Privacy and Security, Safety and Risk Management",
    "State": ""
  },
  {
    "URL": "https://www.aha.org/system/files/2018-01/Impact_of_Accountable_Care_Hospitals.pdf",
    "AI Applications": [],
    "Category": "Professional Medical Organization",
    "predicted_specialty": "unclassified",
    "Year": 2015,
    "Focus Areas": "Reliability and Performance, Privacy and Security, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.ihi.org/sites/default/files/AFrameworkforSpreadWhitePaper2006.pdf",
    "AI Applications": [],
    "Category": "Nonprofit",
    "predicted_specialty": "unclassified",
    "Year": 2006,
    "Focus Areas": "Bias and Fairness, Privacy and Security, Safety and Risk Management",
    "State": ""
  },
  {
    "URL": "https://www.ihi.org/sites/default/files/IHIGlobalTriggerToolWhitePaper2009.pdf",
    "AI Applications": [],
    "Category": "Nonprofit",
    "predicted_specialty": "surgery, Obstetrics_Gynecology, cardiology, pulmonology, nephrology, hematology, infectious_diseases",
    "Year": 2009,
    "Focus Areas": "Reliability and Performance, Privacy and Security, Transparency and Explainability, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.ihi.org/sites/default/files/2023-09/IHIConversationReadyWhitePaper.pdf",
    "AI Applications": [],
    "Category": "Professional Medical Organization",
    "predicted_specialty": "oncology",
    "Year": 2019,
    "Focus Areas": "Reliability and Performance, Safety and Risk Management",
    "State": ""
  },
  {
    "URL": "https://www.ihi.org/sites/default/files/2023-10/PatientSafetyInTheHome_2017.pdf",
    "AI Applications": [],
    "Category": "Professional Medical Organization",
    "predicted_specialty": "neurology",
    "Year": 2017,
    "Focus Areas": "Privacy and Security, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.acep.org/siteassets/sites/acep/media/reimbursement/2023-e-m-descriptors-guidelines.pdf",
    "AI Applications": [],
    "Category": "Professional Medical Organization",
    "predicted_specialty": "unclassified",
    "Year": 2022,
    "Focus Areas": "Reliability and Performance, Privacy and Security, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.acep.org/siteassets/sites/acep/media/by-medical-focus/opioids/opioid-guide-state-by-state.pdf",
    "AI Applications": [],
    "Category": "Professional Medical Organization",
    "predicted_specialty": "psychiatry",
    "Year": 2021,
    "Focus Areas": "Reliability and Performance, Privacy and Security, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.acep.org/siteassets/sites/acep/media/crowding/empc_crowding-ip_092016.pdf",
    "AI Applications": [],
    "Category": "Professional Medical Organization",
    "predicted_specialty": "unclassified",
    "Year": 2016,
    "Focus Areas": "Reliability and Performance, Privacy and Security, Safety and Risk Management",
    "State": ""
  },
  {
    "URL": "https://www.acep.org/siteassets/sites/telehealth/media/documents/acep-telemedicine-primer.pdf",
    "AI Applications": [],
    "Category": "Professional Medical Organization",
    "predicted_specialty": "unclassified",
    "Year": 2014,
    "Focus Areas": "Reliability and Performance, Privacy and Security, Ethics and Consent, Safety and Risk Management",
    "State": ""
  },
  {
    "URL": "https://www.acep.org/siteassets/covid-19---rapid-application-of-technology-for-emergency-department-tele-triage.pdf",
    "AI Applications": [],
    "Category": "Professional Medical Organization",
    "predicted_specialty": "infectious_diseases",
    "Year": "",
    "Focus Areas": "Reliability and Performance, Privacy and Security, Ethics and Consent, Safety and Risk Management",
    "State": ""
  },
  {
    "URL": "https://www.acep.org/siteassets/uploads/uploaded-files/acep/clinical-and-practice-management/policy-statements/death-of-a-child-in-the-emergency-department---technical-rept.pdf",
    "AI Applications": [],
    "Category": "Academic Institution",
    "predicted_specialty": "cardiology, pathology, pediatrics",
    "Year": 2002,
    "Focus Areas": "Privacy and Security, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.ruralhealth.us/nationalruralhealth/media/documents/nrha-impact-of-telehealth-policy-on-rural-health-access-2024.pdf",
    "AI Applications": [],
    "Category": "Professional Medical Organization",
    "predicted_specialty": "infectious_diseases",
    "Year": 2024,
    "Focus Areas": "Reliability and Performance, Privacy and Security, Ethics and Consent, Safety and Risk Management",
    "State": ""
  },
  {
    "URL": "https://www.ruralhealth.us/getmedia/2fffee51-9bf4-4a94-bcdf-330ea9943851/NRHA-Ways-and-Means-RFI-response-10-5-23.pdf",
    "AI Applications": [],
    "Category": "Nonprofit",
    "predicted_specialty": "unclassified",
    "Year": 2023,
    "Focus Areas": "Reliability and Performance, Privacy and Security, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.ruralhealth.us/getmedia/e9e6d9d8-4ca9-4392-9b5a-944f36c8f8f6/NRHA-March-7-meeting-comment-3-21-24.pdf",
    "AI Applications": [],
    "Category": "Nonprofit",
    "predicted_specialty": "unclassified",
    "Year": 2024,
    "Focus Areas": "Reliability and Performance, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.ruralhealth.us/getmedia/48cb0caf-a4a9-4b7e-98a2-0660a85434d5/2024-AC-RHIS-Agenda.pdf",
    "AI Applications": [],
    "Category": "Professional Medical Organization",
    "predicted_specialty": "Obstetrics_Gynecology, psychiatry",
    "Year": 2024,
    "Focus Areas": "Reliability and Performance, Privacy and Security, Safety and Risk Management",
    "State": ""
  },
  {
    "URL": "https://www.ruralhealth.us/getmedia/714ab360-fae1-400b-8f8d-0490c2c96bb3/FutureofRuralHealthFeb-2013.pdf",
    "AI Applications": [],
    "Category": "Professional Medical Organization",
    "predicted_specialty": "surgery",
    "Year": 2010,
    "Focus Areas": "Reliability and Performance, Privacy and Security, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.ruralhealth.us/getmedia/c28ee028-3a7f-44f4-8af0-8e9d2ba94e5a/2020-NRHA-Policy-Document-Tweener-Hosptials-Crisis-FINAL.pdf",
    "AI Applications": [],
    "Category": "Professional Medical Organization",
    "predicted_specialty": "unclassified",
    "Year": 1997,
    "Focus Areas": "Reliability and Performance, Privacy and Security, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.ruralhealth.us/getmedia/c92c1847-826e-4011-acab-eed23cebb978/2019-NRHA-Policy-Document-Demonstrations-and-Pilots-Rural-Centric-Transformation.pdf",
    "AI Applications": [],
    "Category": "Professional Medical Organization",
    "predicted_specialty": "unclassified",
    "Year": 2012,
    "Focus Areas": "Reliability and Performance, Privacy and Security, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.ruralhealth.us/nationalruralhealth/media/documents/advocacy/policy%20brief/nrha-policy-brief-final-sdoh-and-medicaid-1115-waivers.pdf",
    "AI Applications": [],
    "Category": "Professional Medical Organization",
    "predicted_specialty": "unclassified",
    "Year": 2023,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.fda.gov/files/about%20fda/published/Modernization_in_Action_2022.pdf",
    "AI Applications": [],
    "Category": "Federal",
    "predicted_specialty": "infectious_diseases",
    "Year": 2021,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://aspe.hhs.gov/sites/default/files/documents/8dc3a838c7c9652d041c07c2cb966d0f/n3c-11-15-24-final.pdf",
    "AI Applications": "['Predictive Analytics']",
    "Category": "Federal",
    "predicted_specialty": "oncology, endocrinology, infectious_diseases",
    "Year": 2024,
    "Focus Areas": "Reliability and Performance, Transparency and Explainability, Safety and Risk Management",
    "State": ""
  },
  {
    "URL": "https://ncvhs.hhs.gov/wp-content/uploads/2024/08/NCVHS-2024-RTC-Final-for-508.pdf",
    "AI Applications": "['Clinical Documentation AI']",
    "Category": "Federal",
    "predicted_specialty": "Obstetrics_Gynecology",
    "Year": 2024,
    "Focus Areas": "Bias and Fairness, Privacy and Security, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://aspe.hhs.gov/sites/default/files/documents/789434ceda231203f080288de603d1ef/PR-A2599-1.pdf",
    "AI Applications": [],
    "Category": "Federal",
    "predicted_specialty": "oncology, psychiatry, neurology, infectious_diseases",
    "Year": 2023,
    "Focus Areas": "Reliability and Performance, Safety and Risk Management",
    "State": ""
  },
  {
    "URL": "https://www.aspe.hhs.gov/sites/default/files/migrated_legacy_files/57301/ExpSDSFeas.pdf",
    "AI Applications": [],
    "Category": "Federal",
    "predicted_specialty": "psychiatry",
    "Year": 2012,
    "Focus Areas": "Reliability and Performance, Privacy and Security, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.healthit.gov/sites/default/files/page/2024-05/LEAP%20FY2024%20SEN_508.pdf",
    "AI Applications": "['Clinical Decision Support']",
    "Category": "Federal",
    "predicted_specialty": "psychiatry",
    "Year": 2024,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management",
    "State": ""
  },
  {
    "URL": "https://www.healthit.gov/sites/default/files/regionaladt_exchange_network_infrastructure_models.pdf",
    "AI Applications": [],
    "Category": "Federal",
    "predicted_specialty": "unclassified",
    "Year": 2017,
    "Focus Areas": "Reliability and Performance, Privacy and Security, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.nlm.nih.gov/od/bor/May_2022_BOR_Minutes.pdf",
    "AI Applications": [],
    "Category": "Federal",
    "predicted_specialty": "unclassified",
    "Year": 2022,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.nlm.nih.gov/od/bor/May_2023_Final_BOR_Minutes.pdf",
    "AI Applications": "['Research and Clinical Trial AI']",
    "Category": "Federal",
    "predicted_specialty": "unclassified",
    "Year": 2023,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent",
    "State": ""
  },
  {
    "URL": "https://cloud.nih.gov/resources/guides/science-at-cloud-providers/science-on-gcp/GCPHealthcareSolutionsPlaybook.pdf",
    "AI Applications": [],
    "Category": "Federal",
    "predicted_specialty": "unclassified",
    "Year": "",
    "Focus Areas": "Reliability and Performance, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://pubweb-prod.niaid.nih.gov/sites/default/files/DataDrivenStrategiesReport.pdf",
    "AI Applications": "['Medical Imaging AI', 'Research and Clinical Trial AI']",
    "Category": "Federal",
    "predicted_specialty": "infectious_diseases",
    "Year": 2018,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Transparency and Explainability",
    "State": ""
  },
  {
    "URL": "https://www.ncbi.nlm.nih.gov/books/NBK594500/pdf/Bookshelf_NBK594500.pdf",
    "AI Applications": "['Research and Clinical Trial AI']",
    "Category": "Federal",
    "predicted_specialty": "radiology, psychiatry, pediatrics, neurology",
    "Year": 2023,
    "Focus Areas": "Reliability and Performance, Privacy and Security, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.cms.gov/files/document/snapshotupdate01162025.pdf",
    "AI Applications": "['Operational and Administrative Automation']",
    "Category": "State",
    "predicted_specialty": "unclassified",
    "Year": 2025,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.cdc.gov/diabetes-state-local/media/pdfs/E_Telehealth_translation_product_508.pdf",
    "AI Applications": [],
    "Category": "Federal",
    "predicted_specialty": "endocrinology",
    "Year": "",
    "Focus Areas": "Reliability and Performance, Privacy and Security, Ethics and Consent, Safety and Risk Management",
    "State": ""
  },
  {
    "URL": "https://www.whitehouse.gov/wp-content/uploads/2024/07/M-24-15-Modernizing-the-Federal-Risk-and-Authorization-Management-Program.pdf",
    "AI Applications": [],
    "Category": "Federal",
    "predicted_specialty": "unclassified",
    "Year": 2011,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.whitehouse.gov/wp-content/uploads/2019/05/M-19-17.pdf",
    "AI Applications": [],
    "Category": "Federal",
    "predicted_specialty": "unclassified",
    "Year": 2019,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.aim-ahead.net/media/ptwcmyb3/ai-cares-dr-hwang.pdf",
    "AI Applications": [],
    "Category": "Professional Medical Organization",
    "predicted_specialty": "neurology",
    "Year": 2022,
    "Focus Areas": "Reliability and Performance, Privacy and Security, Transparency and Explainability, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://joblink.maine.gov/jobs/723191/description.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "unclassified",
    "Year": "",
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": "Maine"
  },
  {
    "URL": "https://www.vita.virginia.gov/media/vitavirginiagov/it-governance/ea/pdf/EA-Solutions-Artificial-Intelligence-Standard.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "unclassified",
    "Year": 2023,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": "Virginia"
  },
  {
    "URL": "https://documents1.worldbank.org/curated/en/099120224205026271/pdf/P1786161ad76ca0ae1ba3b1558ca4ff88ba.pdf",
    "AI Applications": [],
    "Category": "Nonprofit",
    "predicted_specialty": "unclassified",
    "Year": 2024,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://law-ai.org/wp-content/uploads/2024/11/The-Role-of-Compute-Thresholds-for-AI-Governance.pdf",
    "AI Applications": [],
    "Category": "Professional Medical Organization",
    "predicted_specialty": "unclassified",
    "Year": "",
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.hks.harvard.edu/sites/default/files/2023-11/2021_25_nonnecke_and_dawson_human_rights_implications.pdf",
    "AI Applications": [],
    "Category": "Academic Institution",
    "predicted_specialty": "unclassified",
    "Year": 2021,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://hai.stanford.edu/sites/default/files/2021-10/HAI_NRCR_2021_0.pdf",
    "AI Applications": [],
    "Category": "Academic Institution",
    "predicted_specialty": "infectious_diseases",
    "Year": 2021,
    "Focus Areas": "Bias and Fairness, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://s3.us-east-1.amazonaws.com/files.cnas.org/documents/CNAS-Report-Tech-Secure-Chips-Jan-24-finalb.pdf",
    "AI Applications": [],
    "Category": "Academic Institution",
    "predicted_specialty": "unclassified",
    "Year": 2024,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.alain-bensoussan.com/wp-content/uploads/2017/06/preparing_for_the_future_of_ai.pdf",
    "AI Applications": "['Public Health AI']",
    "Category": "Academic Institution",
    "predicted_specialty": "neurology",
    "Year": 2016,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://brand.amia.org/m/619a63e7f108bfc/original/FY26-Patient-ID-Now-Letter-Congress-Repeal-Section-510.pdf",
    "AI Applications": [],
    "Category": "Professional Medical Organization",
    "predicted_specialty": "unclassified",
    "Year": 2025,
    "Focus Areas": "Bias and Fairness, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://365.himss.org/sites/himss365/files/365/handouts/552651968/handout-42_FINAL.pdf",
    "AI Applications": [],
    "Category": "Professional Medical Organization",
    "predicted_specialty": "unclassified",
    "Year": 2017,
    "Focus Areas": "Reliability and Performance, Privacy and Security, Transparency and Explainability, Safety and Risk Management",
    "State": ""
  },
  {
    "URL": "https://www.aha.org/system/files/media/file/2023/12/Environmental_Scan_2024-Leadership-Discussion-Guide.pdf",
    "AI Applications": [],
    "Category": "Professional Medical Organization",
    "predicted_specialty": "unclassified",
    "Year": 2024,
    "Focus Areas": "Bias and Fairness, Privacy and Security, Safety and Risk Management",
    "State": ""
  },
  {
    "URL": "https://www.aha.org/system/files/media/file/2019/03/Leading_the_Charge_for_Disruptive_Innovation_11-29.pdf",
    "AI Applications": [],
    "Category": "Professional Medical Organization",
    "predicted_specialty": "unclassified",
    "Year": "",
    "Focus Areas": "Reliability and Performance, Safety and Risk Management",
    "State": ""
  },
  {
    "URL": "https://forms.ihi.org/hubfs/2025%20Congress%20Continuing%20Education%20Credits%20by%20Session%20v1.pdf",
    "AI Applications": [],
    "Category": "Professional Medical Organization",
    "predicted_specialty": "unclassified",
    "Year": 2025,
    "Focus Areas": "Bias and Fairness, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management",
    "State": ""
  },
  {
    "URL": "https://www.ihi.org/sites/default/files/2023-10/ExperiencedBasedCodesign_InnovationCaseStudy.pdf",
    "AI Applications": [],
    "Category": "Academic Institution",
    "predicted_specialty": "oncology",
    "Year": 2017,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Safety and Risk Management",
    "State": ""
  },
  {
    "URL": "https://www.ruralhealth.us/nationalruralhealth/media/documents/events/2025/2025-ac-rhis-agenda.pdf",
    "AI Applications": [],
    "Category": "Academic Institution",
    "predicted_specialty": "psychiatry",
    "Year": 2025,
    "Focus Areas": "Reliability and Performance, Privacy and Security, Ethics and Consent, Safety and Risk Management",
    "State": ""
  },
  {
    "URL": "https://www.cms.hhs.gov/manuals/downloads/som107ap_b_hha.pdf",
    "AI Applications": [],
    "Category": "Federal",
    "predicted_specialty": "pathology, psychiatry, infectious_diseases",
    "Year": 2024,
    "Focus Areas": "Reliability and Performance, Privacy and Security, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.healthit.gov/sites/default/files/2025-01/SAFER-Guides-2024-Update-David-Hunt-Hunt_508.pdf",
    "AI Applications": [],
    "Category": "Federal",
    "predicted_specialty": "unclassified",
    "Year": 2024,
    "Focus Areas": "Bias and Fairness, Privacy and Security, Ethics and Consent, Safety and Risk Management",
    "State": ""
  },
  {
    "URL": "https://www.healthit.gov/sites/default/files/topiclanding/2025-01/1.%20Clinical%20Communication%20Final.pdf",
    "AI Applications": [],
    "Category": "Federal",
    "predicted_specialty": "unclassified",
    "Year": 2024,
    "Focus Areas": "Bias and Fairness, Privacy and Security, Ethics and Consent, Safety and Risk Management",
    "State": ""
  },
  {
    "URL": "https://www.healthit.gov/sites/default/files/2024-09/Sheeva%20Azma.pdf",
    "AI Applications": "['Public Health AI']",
    "Category": "Federal",
    "predicted_specialty": "unclassified",
    "Year": 2024,
    "Focus Areas": "Bias and Fairness, Privacy and Security, Safety and Risk Management",
    "State": ""
  },
  {
    "URL": "https://www.healthit.gov/sites/default/files/topiclanding/2025-01/3.%20CPOE%20Final.pdf",
    "AI Applications": [],
    "Category": "Federal",
    "predicted_specialty": "unclassified",
    "Year": 2024,
    "Focus Areas": "Bias and Fairness, Privacy and Security, Ethics and Consent, Safety and Risk Management",
    "State": ""
  },
  {
    "URL": "https://mmshub.cms.gov/sites/default/files/QA-Summary-Final.pdf",
    "AI Applications": "['Robotics and Surgical AI']",
    "Category": "State",
    "predicted_specialty": "unclassified",
    "Year": 2024,
    "Focus Areas": "Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management",
    "State": ""
  },
  {
    "URL": "https://www.cms.gov/Regulations-and-Guidance/Guidance/Manuals/downloads/som107ap_b_hha.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "pathology, psychiatry, infectious_diseases",
    "Year": 2024,
    "Focus Areas": "Reliability and Performance, Privacy and Security, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.cms.gov/files/document/implementing-national-clas-lessons-field.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "unclassified",
    "Year": 2025,
    "Focus Areas": "Bias and Fairness, Privacy and Security, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.cms.gov/files/document/wiser-fact-sheet.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "unclassified",
    "Year": 2025,
    "Focus Areas": "Reliability and Performance, Transparency and Explainability",
    "State": ""
  },
  {
    "URL": "https://www.whitehouse.gov/wp-content/uploads/2025/02/AI-Memo-Fact-Sheet.pdf",
    "AI Applications": [],
    "Category": "Federal",
    "predicted_specialty": "unclassified",
    "Year": "",
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.whitehouse.gov/wp-content/uploads/2020/11/M-21-06.pdf",
    "AI Applications": [],
    "Category": "Federal",
    "predicted_specialty": "unclassified",
    "Year": 2019,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.aim-ahead.net/media/raekwjgs/aim-ahead-bridge2ai-for-clinical-care-informational-webinar.pdf",
    "AI Applications": [],
    "Category": "Professional Medical Organization",
    "predicted_specialty": "unclassified",
    "Year": 2024,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Transparency and Explainability",
    "State": ""
  },
  {
    "URL": "https://www.aim-ahead.net/media/3bjhb2xz/haller-nhlbi-ai-and-health-equity.pdf",
    "AI Applications": [],
    "Category": "Professional Medical Organization",
    "predicted_specialty": "unclassified",
    "Year": 2024,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Transparency and Explainability",
    "State": ""
  },
  {
    "URL": "https://doc.alabama.gov/docs/AdminRegs/AR635.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "psychiatry",
    "Year": 2024,
    "Focus Areas": "Reliability and Performance, Privacy and Security, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": "Alabama"
  },
  {
    "URL": "https://cdss.ca.gov/ord/entres/getinfo/pdf/rcfci3.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "pulmonology, infectious_diseases",
    "Year": 2002,
    "Focus Areas": "Privacy and Security, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": "California"
  },
  {
    "URL": "https://ahca.myflorida.com/content/download/26705/file/2025.06.12%20SCHIP%20Draft%20Meeting%20Min%20%28CR%29%20%28MH%29%20%28CR%29%28PK%29.pdf",
    "AI Applications": [],
    "Category": "Professional Medical Organization",
    "predicted_specialty": "unclassified",
    "Year": 2025,
    "Focus Areas": "Reliability and Performance, Privacy and Security, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": "Florida"
  },
  {
    "URL": "https://health.hawaii.gov/dcab/files/2023/04/Access-to-HealthCare-Provider-rev09.23.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "unclassified",
    "Year": "",
    "Focus Areas": "Privacy and Security, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": "Hawaii"
  },
  {
    "URL": "https://www.in.gov/health/files/Michelle_Ellison_Healthcare_Industry_Worker_Safety_and_Health.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "unclassified",
    "Year": 2011,
    "Focus Areas": "Bias and Fairness, Privacy and Security, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": "Indiana"
  },
  {
    "URL": "https://publications.iowa.gov/50207/1/RIP_Brief_TPF-5%28438%29_AI-Powered_Improvements_to_Workzone_Management_and_Safety.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "unclassified",
    "Year": 2025,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": "Iowa"
  },
  {
    "URL": "https://mhcc.maryland.gov/mhcc/pages/home/meeting_schedule/documents/presentations/2023/20230216/Ag4_MPSC_Report_to_MHCC_June%202022_December%202022.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "infectious_diseases",
    "Year": 2022,
    "Focus Areas": "Privacy and Security, Safety and Risk Management",
    "State": "Maryland"
  },
  {
    "URL": "https://health.mn.gov/diseases/cardiovascular/documents/clinicalpiguide.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "radiology, neurology",
    "Year": 2018,
    "Focus Areas": "Reliability and Performance, Privacy and Security, Safety and Risk Management, Governance Committees",
    "State": "Minnesota"
  },
  {
    "URL": "https://www.lbo.ms.gov/misc/strategic/FY26/838-00-plan.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "unclassified",
    "Year": 2026,
    "Focus Areas": "Privacy and Security, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": "Mississippi"
  },
  {
    "URL": "https://nitc.nebraska.gov/standards/8-609.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "unclassified",
    "Year": 2024,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": "Nebraska"
  },
  {
    "URL": "https://it.nv.gov/uploadedFiles/itnewnvgov/content/Governance/Policy%20on%20the%20Responsible%20and%20Ethical%20Use%20of%20Artificial%20Intelligence%20in%20Nevada%20-%20CIO%20Signed.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "unclassified",
    "Year": 2024,
    "Focus Areas": "Bias and Fairness, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": "Nevada"
  },
  {
    "URL": "https://www.health.ny.gov/health_care/medicaid/redesign/docs/state_designated_health_homes_and_downstream_care_management_agencies.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "psychiatry",
    "Year": 2013,
    "Focus Areas": "Reliability and Performance, Privacy and Security, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": "New York"
  },
  {
    "URL": "https://omh.ny.gov/omhweb/bh_services_council/omh-regulations-06162022.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "psychiatry",
    "Year": 2021,
    "Focus Areas": "Reliability and Performance, Privacy and Security, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": "New York"
  },
  {
    "URL": "https://www.pa.gov/content/dam/copapwp-pagov/en/oa/documents/policies/it-policies/artificial%20intelligence%20policy.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "unclassified",
    "Year": 2025,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": "Pennsylvania"
  },
  {
    "URL": "https://eohhs.ri.gov/sites/g/files/xkgbur226/files/2024-10/HCSP%20Hospital%20Sector%20Working%20Group%20-%20Meeting%20%231_Presentation%20Deck.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "unclassified",
    "Year": 2024,
    "Focus Areas": "Reliability and Performance, Privacy and Security, Safety and Risk Management, Governance Committees",
    "State": "Rhode Island"
  },
  {
    "URL": "https://capitol.texas.gov/tlodocs/89R/analysis/pdf/HB04503H.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "unclassified",
    "Year": 2026,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": "Texas"
  },
  {
    "URL": "https://ai.utah.gov/wp-content/uploads/Executive-Summary-Best-Practices-Mental-Health-Therapists.pdf",
    "AI Applications": "['Clinical Documentation AI', 'Patient-facing AI']",
    "Category": "State",
    "predicted_specialty": "unclassified",
    "Year": 2025,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": "Utah"
  },
  {
    "URL": "https://le.utah.gov/Session/2025/bills/introduced/HB0452.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "psychiatry",
    "Year": 2025,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": "Utah"
  },
  {
    "URL": "https://www.hca.wa.gov/assets/program/fact-sheet-ai-ethics-framework.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "unclassified",
    "Year": 2024,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Governance Committees",
    "State": "Washington"
  },
  {
    "URL": "https://www.hca.wa.gov/assets/program/faq-AI-ethics-framework_0.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "unclassified",
    "Year": 2024,
    "Focus Areas": "Bias and Fairness, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": "Washington"
  },
  {
    "URL": "https://npsb.org/wp-content/uploads/2025/01/PCAST_Patient-Safety-Report_Sept2023.pdf",
    "AI Applications": "['Patient-facing AI', 'Research and Clinical Trial AI', 'Public Health AI', 'Clinical Decision Support']",
    "Category": "Academic Institution",
    "predicted_specialty": "surgery, cardiology",
    "Year": 2022,
    "Focus Areas": "Bias and Fairness, Privacy and Security, Transparency and Explainability, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.apsf.org/wp-content/uploads/newsletters/2023/3801/APSF3704-2023-2-a01-artificial-intelligence.pdf",
    "AI Applications": "['Robotics and Surgical AI', 'Education and Training AI', 'Research and Clinical Trial AI', 'Operational and Administrative Automation', 'Clinical Decision Support', 'Clinical Documentation AI', 'Predictive Analytics', 'Patient-facing AI']",
    "Category": "Professional Medical Organization",
    "predicted_specialty": "surgery",
    "Year": 2023,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://wcapdd.org/wp-content/uploads/2023/12/Attachment-A.pdf",
    "AI Applications": [],
    "Category": "Professional Medical Organization",
    "predicted_specialty": "surgery, cardiology",
    "Year": 2012,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.scitepress.org/Papers/2025/131871/131871.pdf",
    "AI Applications": "['Clinical Documentation AI']",
    "Category": "Academic Institution",
    "predicted_specialty": "unclassified",
    "Year": 2024,
    "Focus Areas": "Bias and Fairness, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.uab.edu/shp/hsa/images/documents/continuing-education/2024-Keynote-Presentation-Tejal-Gandhi.pdf",
    "AI Applications": "['Patient-facing AI', 'Predictive Analytics', 'Operational and Administrative Automation', 'Public Health AI', 'Clinical Decision Support', 'Research and Clinical Trial AI', 'Clinical Documentation AI', 'Robotics and Surgical AI']",
    "Category": "Professional Medical Organization",
    "predicted_specialty": "unclassified",
    "Year": 2024,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://informatics.bmj.com/content/bmjhci/29/1/e100549.full.pdf",
    "AI Applications": [],
    "Category": "Academic Institution",
    "predicted_specialty": "infectious_diseases",
    "Year": 2022,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://qualitysafety.bmj.com/content/qhc/early/2024/07/24/bmjqs-2023-016690.full.pdf",
    "AI Applications": "['Medical Imaging AI', 'Predictive Analytics', 'Clinical Documentation AI']",
    "Category": "Professional Medical Organization",
    "predicted_specialty": "unclassified",
    "Year": 2023,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://languageworld.com/wp-content/uploads/2021/06/improvingpatientsafetyinhospitals.pdf",
    "AI Applications": [],
    "Category": "Professional Medical Organization",
    "predicted_specialty": "surgery, cardiology",
    "Year": 2012,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://journalofmedicalanddentalfrontiers.com/wp-content/uploads/2025/01/AI-in-health-care.pdf",
    "AI Applications": "['Operational and Administrative Automation', 'Patient-facing AI', 'Robotics and Surgical AI', 'Education and Training AI', 'Public Health AI', 'Clinical Decision Support', 'Predictive Analytics', 'Clinical Documentation AI', 'Research and Clinical Trial AI', 'Medical Imaging AI']",
    "Category": "Academic Institution",
    "predicted_specialty": "unclassified",
    "Year": 2024,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://saudijournals.com/media/articles/SJM_95_159-162.pdf",
    "AI Applications": "['Clinical Documentation AI', 'Clinical Decision Support', 'Medical Imaging AI', 'Operational and Administrative Automation', 'Research and Clinical Trial AI', 'Public Health AI']",
    "Category": "Academic Institution",
    "predicted_specialty": "unclassified",
    "Year": 2024,
    "Focus Areas": "Bias and Fairness, Privacy and Security, Transparency and Explainability, Ethics and Consent, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.irjms.com/wp-content/uploads/2025/01/Manuscript_IRJMS_0991_WS.pdf",
    "AI Applications": "['Public Health AI', 'Clinical Documentation AI', 'Education and Training AI', 'Clinical Decision Support', 'Predictive Analytics', 'Operational and Administrative Automation', 'Research and Clinical Trial AI', 'Robotics and Surgical AI', 'Patient-facing AI', 'Medical Imaging AI']",
    "Category": "Academic Institution",
    "predicted_specialty": "unclassified",
    "Year": 2025,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.allmultidisciplinaryjournal.com/uploads/archives/20250210182421_MGE-2025-1-334.1.pdf",
    "AI Applications": "['Research and Clinical Trial AI', 'Patient-facing AI', 'Operational and Administrative Automation', 'Robotics and Surgical AI', 'Clinical Decision Support', 'Clinical Documentation AI', 'Predictive Analytics', 'Public Health AI']",
    "Category": "Professional Medical Organization",
    "predicted_specialty": "unclassified",
    "Year": 2023,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.ahima.org/media/s1xllyii/ahima-workforce.pdf",
    "AI Applications": [],
    "Category": "Professional Medical Organization",
    "predicted_specialty": "unclassified",
    "Year": "",
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://councilreports.ama-assn.org/councilreports/downloadreport?uri=/councilreports/a24_cms_rpt_7.pdf",
    "AI Applications": "['Clinical Documentation AI', 'Operational and Administrative Automation', 'Patient-facing AI', 'Public Health AI']",
    "Category": "Professional Medical Organization",
    "predicted_specialty": "unclassified",
    "Year": 2023,
    "Focus Areas": "Bias and Fairness, Privacy and Security, Ethics and Consent, Safety and Risk Management",
    "State": ""
  },
  {
    "URL": "https://www.ama-assn.org/system/files/a25-omss-report-a.pdf",
    "AI Applications": [],
    "Category": "Professional Medical Organization",
    "predicted_specialty": "surgery",
    "Year": 2025,
    "Focus Areas": "Bias and Fairness, Privacy and Security, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://brand.amia.org/m/2cf7c483afbdc065/original/Bera-RFI-The-State-of-Artificial-Intelligence-in-Health-Care.pdf",
    "AI Applications": [],
    "Category": "Professional Medical Organization",
    "predicted_specialty": "unclassified",
    "Year": 2024,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://brand.amia.org/m/243dcd2d29eac541/original/AMIA-AI-One-Pager.pdf",
    "AI Applications": [],
    "Category": "Professional Medical Organization",
    "predicted_specialty": "unclassified",
    "Year": "",
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Transparency and Explainability, Ethics and Consent",
    "State": ""
  },
  {
    "URL": "https://brand.amia.org/m/79a1206b35bd5962/original/AMIA-Factsheet_ASTP-NLM.pdf",
    "AI Applications": [],
    "Category": "Professional Medical Organization",
    "predicted_specialty": "unclassified",
    "Year": 2009,
    "Focus Areas": "Bias and Fairness, Privacy and Security, Ethics and Consent",
    "State": ""
  },
  {
    "URL": "https://www.aha.org/system/files/media/file/2023/11/2024_AHA_Health_Care_Workforce_Scan-Summary.pdf",
    "AI Applications": [],
    "Category": "Professional Medical Organization",
    "predicted_specialty": "unclassified",
    "Year": 2024,
    "Focus Areas": "Bias and Fairness, Reliability and Performance",
    "State": ""
  },
  {
    "URL": "https://www.ihi.org/sites/default/files/2024-05/Patient-Safety-AI_Considerations-for-Safety-Quality-Professionals.pdf",
    "AI Applications": "['Education and Training AI']",
    "Category": "Professional Medical Organization",
    "predicted_specialty": "unclassified",
    "Year": 2024,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.ihi.org/sites/default/files/2024-05/Patient-Safety-AI_Considerations-for-Researchers.pdf",
    "AI Applications": [],
    "Category": "Professional Medical Organization",
    "predicted_specialty": "unclassified",
    "Year": 2024,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.ihi.org/sites/default/files/2024-05/Patient-Safety-AI_Considerations-for-Patients.pdf",
    "AI Applications": "['Clinical Documentation AI', 'Patient-facing AI', 'Education and Training AI']",
    "Category": "Professional Medical Organization",
    "predicted_specialty": "unclassified",
    "Year": 2024,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management",
    "State": ""
  },
  {
    "URL": "https://www.accessdata.fda.gov/cdrh_docs/pdf24/K240953.pdf",
    "AI Applications": [],
    "Category": "Federal",
    "predicted_specialty": "radiology, cardiology",
    "Year": 2024,
    "Focus Areas": "Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.accessdata.fda.gov/cdrh_docs/pdf23/K233955.pdf",
    "AI Applications": [],
    "Category": "Federal",
    "predicted_specialty": "radiology",
    "Year": 2024,
    "Focus Areas": "Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://ncvhs.hhs.gov/wp-content/uploads/2023/05/Presentation-NCVHS-FC-Meeting-Day-2-Artificial-Intelligence-Hoppe.pdf",
    "AI Applications": [],
    "Category": "Federal",
    "predicted_specialty": "unclassified",
    "Year": 2023,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.healthit.gov/sites/default/files/page/2023-12/HTI-1_DSI_fact%20sheet_508.pdf",
    "AI Applications": [],
    "Category": "Federal",
    "predicted_specialty": "unclassified",
    "Year": 2024,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://mmshub.cms.gov/sites/default/files/Del-8-17-MMS-OY1-Information-Session-April-2025.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "surgery, pulmonology",
    "Year": 2025,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.cdc.gov/global-health/media/pdfs/GDHS_Strategy2022_REV_508.pdf",
    "AI Applications": [],
    "Category": "Federal",
    "predicted_specialty": "infectious_diseases",
    "Year": 2021,
    "Focus Areas": "Bias and Fairness, Privacy and Security, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://apcp.assembly.ca.gov/system/files/2024-02/2.27-backgrounder-final.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "unclassified",
    "Year": 2023,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": "California"
  },
  {
    "URL": "https://ahea.assembly.ca.gov/system/files/2025-05/cedars-sinai-powerpoint-slides.pdf",
    "AI Applications": "['Patient-facing AI', 'Robotics and Surgical AI', 'Education and Training AI', 'Public Health AI', 'Research and Clinical Trial AI', 'Clinical Documentation AI']",
    "Category": "State",
    "predicted_specialty": "unclassified",
    "Year": 2025,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Safety and Risk Management, Governance Committees",
    "State": "California"
  },
  {
    "URL": "https://ciapm.chhs.ca.gov/docs/reports/20200327-Evaluations_Report_CIAPM_Projects_2015-2018_update.pdf",
    "AI Applications": "['Medical Imaging AI', 'Education and Training AI', 'Research and Clinical Trial AI']",
    "Category": "State",
    "predicted_specialty": "oncology, radiology, cardiology, pathology, rheumatology, psychiatry, pediatrics, neurology, infectious_diseases",
    "Year": 2015,
    "Focus Areas": "Reliability and Performance, Transparency and Explainability, Safety and Risk Management",
    "State": "California"
  },
  {
    "URL": "https://data.hawaii.gov/wp-content/uploads/2025/03/CDO007-GenAI-Assistant-Technologies-Usage-Guidelines.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "unclassified",
    "Year": 2023,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management",
    "State": "Hawaii"
  },
  {
    "URL": "https://governor.maryland.gov/Lists/ExecutiveOrders/Attachments/31/EO%2001.01.2024.02%20Catalyzing%20the%20Responsible%20and%20Productive%20Use%20of%20Artificial%20Intelligence%20in%20Maryland%20State%20Government_Accessible.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "unclassified",
    "Year": 2024,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": "Maryland"
  },
  {
    "URL": "https://capitol.texas.gov/tlodocs/89R/billtext/pdf/HB01709I.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "unclassified",
    "Year": "",
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": "Texas"
  },
  {
    "URL": "https://www.hca.wa.gov/assets/program/breast_draft_key_qs_comments_response_082214[1]_0.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "Obstetrics_Gynecology, oncology, radiology, pathology",
    "Year": 2014,
    "Focus Areas": "Reliability and Performance, Safety and Risk Management",
    "State": "Washington"
  },
  {
    "URL": "https://docs.legis.wisconsin.gov/misc/lc/hearing_testimony_and_materials/2021/sb562/sb0562_2021_10_27.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "Obstetrics_Gynecology, cardiology, endocrinology, psychiatry, pediatrics",
    "Year": 2021,
    "Focus Areas": "Reliability and Performance, Safety and Risk Management",
    "State": "Wisconsin"
  },
  {
    "URL": "https://dirjournal.org/pdf/beb8919b-f013-4ea1-b1c8-40332e840fe1/articles/dir.2024.242854/75-88.pdf",
    "AI Applications": "['Medical Imaging AI']",
    "Category": "Professional Medical Organization",
    "predicted_specialty": "radiology",
    "Year": 2024,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Transparency and Explainability, Ethics and Consent, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.medrxiv.org/content/10.1101/2024.10.24.24316073.full.pdf",
    "AI Applications": "['Clinical Documentation AI']",
    "Category": "Academic Institution",
    "predicted_specialty": "unclassified",
    "Year": 2024,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Transparency and Explainability, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.sciencepolicyjournal.org/uploads/5/4/3/4/5434385/harve_etal_jspg-25-1_1.pdf",
    "AI Applications": "['Public Health AI']",
    "Category": "Academic Institution",
    "predicted_specialty": "unclassified",
    "Year": 2023,
    "Focus Areas": "Bias and Fairness, Privacy and Security, Transparency and Explainability, Ethics and Consent, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://rojournals.org/wp-content/uploads/2024/10/ROJBAS-42-P8-2024.pdf",
    "AI Applications": "['Education and Training AI', 'Medical Imaging AI', 'Research and Clinical Trial AI', 'Public Health AI']",
    "Category": "Academic Institution",
    "predicted_specialty": "unclassified",
    "Year": 2024,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Transparency and Explainability, Ethics and Consent, Governance Committees",
    "State": ""
  },
  {
    "URL": "http://www.sciencepolicyjournal.org/uploads/5/4/3/4/5434385/livingston_jspg_v16.2.pdf",
    "AI Applications": [],
    "Category": "Academic Institution",
    "predicted_specialty": "unclassified",
    "Year": 2020,
    "Focus Areas": "Bias and Fairness, Privacy and Security, Transparency and Explainability, Ethics and Consent, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://pdfs.semanticscholar.org/0a8f/4ea6d604684c5167b9718c1eda74f8a39c29.pdf",
    "AI Applications": [],
    "Category": "Academic Institution",
    "predicted_specialty": "unclassified",
    "Year": 2023,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.seahipublications.org/wp-content/uploads/2025/04/IJIISTR-J-19-2025.pdf",
    "AI Applications": [],
    "Category": "Academic Institution",
    "predicted_specialty": "unclassified",
    "Year": 2025,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Transparency and Explainability, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://caps.center.uconn.edu/wp-content/uploads/sites/3350/2021/08/2109.02202.pdf",
    "AI Applications": [],
    "Category": "Professional Medical Organization",
    "predicted_specialty": "unclassified",
    "Year": 2021,
    "Focus Areas": "Bias and Fairness, Transparency and Explainability, Ethics and Consent, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://healthpolicy.duke.edu/sites/default/files/2022-01/Primary%20Slide%20Deck%20Understanding%20Bias%20and%20Fairness%20in%20AI-enabled%20Healthcare%20Software.pdf",
    "AI Applications": "['Clinical Decision Support', 'Predictive Analytics']",
    "Category": "Academic Institution",
    "predicted_specialty": "unclassified",
    "Year": 2021,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Transparency and Explainability, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://scholarship.law.vanderbilt.edu/context/faculty-publications/article/2352/viewcontent/Human_Centered_Design_to_Address_Biases_in_Artificial_Intelligence.pdf",
    "AI Applications": "['Public Health AI']",
    "Category": "Academic Institution",
    "predicted_specialty": "unclassified",
    "Year": 2023,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Transparency and Explainability, Ethics and Consent, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://unu.edu/sites/default/files/2024-06/2-AI%20in%20SecSoc%202024.pdf",
    "AI Applications": "['Medical Imaging AI', 'Operational and Administrative Automation', 'Public Health AI', 'Predictive Analytics']",
    "Category": "Academic Institution",
    "predicted_specialty": "infectious_diseases",
    "Year": 2024,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.csus.edu/college/social-sciences-interdisciplinary-studies/public-policy-administration/_internal/_documents/thesis-bank/ruth-bahta-ppa-500-culminating-project.pdf",
    "AI Applications": [],
    "Category": "Academic Institution",
    "predicted_specialty": "unclassified",
    "Year": 2024,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Transparency and Explainability, Ethics and Consent, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.gavinpublishers.com/assets/articles_pdf/AI-for-Equity-Developing-Adaptive-Bias-Detection-Frameworks-for-Healthcare-Algorithms-.pdf",
    "AI Applications": "['Clinical Documentation AI', 'Operational and Administrative Automation', 'Education and Training AI', 'Research and Clinical Trial AI', 'Clinical Decision Support']",
    "Category": "Academic Institution",
    "predicted_specialty": "unclassified",
    "Year": 2025,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Transparency and Explainability, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.cureus.com/articles/230297-efficacy-of-ai-models-in-detecting-heart-failure-using-ecg-data-a-systematic-review-and-meta-analysis.pdf",
    "AI Applications": "['Patient-facing AI', 'Medical Imaging AI', 'Clinical Decision Support', 'Clinical Documentation AI', 'Operational and Administrative Automation', 'Research and Clinical Trial AI', 'Public Health AI']",
    "Category": "Professional Medical Organization",
    "predicted_specialty": "cardiology",
    "Year": 2025,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://irjet.com/archives/V11/i6/IRJET-V11I6122.pdf",
    "AI Applications": "['Clinical Documentation AI', 'Operational and Administrative Automation', 'Patient-facing AI', 'Robotics and Surgical AI', 'Education and Training AI', 'Research and Clinical Trial AI', 'Medical Imaging AI']",
    "Category": "Professional Medical Organization",
    "predicted_specialty": "unclassified",
    "Year": 2024,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.irjmets.com/uploadedfiles/paper//issue_9_september_2024/61692/final/fin_irjmets1727091305.pdf",
    "AI Applications": [],
    "Category": "Academic Institution",
    "predicted_specialty": "unclassified",
    "Year": 2019,
    "Focus Areas": "Bias and Fairness, Privacy and Security, Transparency and Explainability, Ethics and Consent, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://assets.coalfire.com/prod/resources/Whitepapers/White-Paper-Risk-and-Governance-Strategies-for-AI-in-Healthcare.pdf",
    "AI Applications": "['Clinical Documentation AI', 'Operational and Administrative Automation', 'Patient-facing AI', 'Robotics and Surgical AI', 'Education and Training AI', 'Research and Clinical Trial AI']",
    "Category": "Professional Medical Organization",
    "predicted_specialty": "unclassified",
    "Year": 2025,
    "Focus Areas": "Bias and Fairness, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://sarpublication.com/media/articles/SARJET_71_33-48.pdf",
    "AI Applications": "['Education and Training AI', 'Operational and Administrative Automation', 'Robotics and Surgical AI']",
    "Category": "Academic Institution",
    "predicted_specialty": "unclassified",
    "Year": 2025,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Transparency and Explainability, Ethics and Consent, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://nhsjs.com/wp-content/uploads/2024/08/Evaluating-Gender-Bias-and-Fairness-in-Skin-Lesion-Diagnoses-using-Convolutional-Neural-Networks-2-1.pdf",
    "AI Applications": "['Medical Imaging AI']",
    "Category": "Academic Institution",
    "predicted_specialty": "oncology, radiology, dermatology",
    "Year": 2024,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Transparency and Explainability, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://ijetrm.com/issues/files/Apr-2023-10-1744279646-NOV202309.pdf",
    "AI Applications": [],
    "Category": "Academic Institution",
    "predicted_specialty": "unclassified",
    "Year": 2023,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://isarpublisher.com/backend/public/assets/articles/1749483106-ISARJMPS--1122024-GP.pdf",
    "AI Applications": "['Predictive Analytics', 'Education and Training AI', 'Research and Clinical Trial AI', 'Public Health AI', 'Clinical Documentation AI', 'Clinical Decision Support']",
    "Category": "Academic Institution",
    "predicted_specialty": "unclassified",
    "Year": 2023,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Transparency and Explainability, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://ahima.org/media/nr5enxrw/final-ahima-health-equity-recommendations-fall-2022-v2.pdf",
    "AI Applications": [],
    "Category": "Professional Medical Organization",
    "predicted_specialty": "unclassified",
    "Year": 2022,
    "Focus Areas": "Bias and Fairness, Transparency and Explainability, Safety and Risk Management",
    "State": ""
  },
  {
    "URL": "https://brand.amia.org/m/7e1bc583a2d9527/original/ai-showcase-resources-2024.pdf",
    "AI Applications": [],
    "Category": "Academic Institution",
    "predicted_specialty": "unclassified",
    "Year": 2021,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Transparency and Explainability, Ethics and Consent, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.himss.org/sites/hde/files/media/file/2021/08/04/cio-experience-guide_0.pdf",
    "AI Applications": "['Clinical Documentation AI', 'Operational and Administrative Automation']",
    "Category": "Professional Medical Organization",
    "predicted_specialty": "unclassified",
    "Year": 2021,
    "Focus Areas": "Reliability and Performance, Privacy and Security, Ethics and Consent, Safety and Risk Management",
    "State": ""
  },
  {
    "URL": "https://legacy.himss.org/sites/hde/files/media/file/2024/07/10/sdoh_white-paper.pdf",
    "AI Applications": [],
    "Category": "Professional Medical Organization",
    "predicted_specialty": "infectious_diseases",
    "Year": 2023,
    "Focus Areas": "Bias and Fairness, Privacy and Security, Ethics and Consent, Safety and Risk Management",
    "State": ""
  },
  {
    "URL": "https://www.aha.org/system/files/media/file/2024/07/paa-responsible-ai-clinical-decision-making.pdf",
    "AI Applications": "['Clinical Documentation AI']",
    "Category": "Professional Medical Organization",
    "predicted_specialty": "unclassified",
    "Year": 2024,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Transparency and Explainability, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://trustees.aha.org/system/files/media/file/2024/02/TI_0224_ai-1.pdf",
    "AI Applications": [],
    "Category": "Professional Medical Organization",
    "predicted_specialty": "unclassified",
    "Year": 2024,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://aspr.hhs.gov/cyber/Documents/Health-Care-Sector-Cybersecurity-Dec2023-508.pdf",
    "AI Applications": [],
    "Category": "Federal",
    "predicted_specialty": "unclassified",
    "Year": 2023,
    "Focus Areas": "Bias and Fairness, Privacy and Security, Ethics and Consent, Safety and Risk Management",
    "State": ""
  },
  {
    "URL": "https://www.ncvhs.hhs.gov/wp-content/uploads/2018/02/NCVHS-Beyond-HIPAA_Report-Final-02-08-18.pdf",
    "AI Applications": [],
    "Category": "Federal",
    "predicted_specialty": "endocrinology",
    "Year": 2017,
    "Focus Areas": "Bias and Fairness, Privacy and Security, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.healthit.gov/sites/default/files/2024-09/Samantha%20Segall.pdf",
    "AI Applications": "['Research and Clinical Trial AI', 'Public Health AI', 'Clinical Decision Support']",
    "Category": "Federal",
    "predicted_specialty": "unclassified",
    "Year": 2024,
    "Focus Areas": "Bias and Fairness, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.healthit.gov/sites/default/files/page/2024-03/HITAC_Annual_Report_for_FY23_508.pdf",
    "AI Applications": "['Patient-facing AI']",
    "Category": "Federal",
    "predicted_specialty": "unclassified",
    "Year": 2023,
    "Focus Areas": "Bias and Fairness, Privacy and Security, Ethics and Consent, Safety and Risk Management",
    "State": ""
  },
  {
    "URL": "https://www.cms.gov/outreach-and-education/medicare-learning-network-mln/mlnproducts/downloads/hipaaprivacyandsecurity.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "unclassified",
    "Year": 2025,
    "Focus Areas": "Privacy and Security, Ethics and Consent, Safety and Risk Management",
    "State": ""
  },
  {
    "URL": "https://dps.alaska.gov/getmedia/74138e18-b406-45c8-8409-54d66e17294f/241-Mobile-Audio-and-Video-Recording-05012023.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "unclassified",
    "Year": 2023,
    "Focus Areas": "Privacy and Security, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": "Alaska"
  },
  {
    "URL": "https://apcp.assembly.ca.gov/system/files/2025-04/ab-1043-wicks-apcp-analysis.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "psychiatry",
    "Year": 2025,
    "Focus Areas": "Privacy and Security, Ethics and Consent, Safety and Risk Management",
    "State": "California"
  },
  {
    "URL": "https://sjud.senate.ca.gov/system/files/2025-03/sb-11-ashby-sjud-analysis.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "unclassified",
    "Year": 2025,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": "California"
  },
  {
    "URL": "https://www.dhcs.ca.gov/provgovpart/Documents/Waiver%20Renewal/CA_SNCP_Waiver_Amend-CMSapproval.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "surgery, Obstetrics_Gynecology, oncology, cardiology, endocrinology, pulmonology, hematology, psychiatry, pediatrics, neurology, infectious_diseases",
    "Year": 2013,
    "Focus Areas": "Reliability and Performance, Privacy and Security, Safety and Risk Management, Governance Committees",
    "State": "California"
  },
  {
    "URL": "https://portal.ct.gov/cid/-/media/cid/1_bulletins/bulletin-mc-25.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "unclassified",
    "Year": 2024,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": "Connecticut"
  },
  {
    "URL": "https://www.finance.idaho.gov/wp-content/uploads/2023/09/ETAC-AI-Principles-Final.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "unclassified",
    "Year": "",
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": "Idaho"
  },
  {
    "URL": "https://www.in.gov/mph/cdo/files/State-of-Indiana-Artificial-Intelligence-Policy.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "unclassified",
    "Year": 2024,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": "Indiana"
  },
  {
    "URL": "https://finance.ky.gov/eProcurement/HumanaResponse/185_I_D_Implementation%20Plan_PROPRIETARY.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "unclassified",
    "Year": "",
    "Focus Areas": "Reliability and Performance, Privacy and Security, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": "Kentucky"
  },
  {
    "URL": "https://www.maine.gov/dental/documents/3-25-2022-combined_meeting_materials.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "surgery, radiology, nephrology, psychiatry, infectious_diseases",
    "Year": 2021,
    "Focus Areas": "Privacy and Security, Ethics and Consent, Safety and Risk Management",
    "State": "Maine"
  },
  {
    "URL": "https://mgaleg.maryland.gov/cmte_testimony/2025/fin/1ctxkMXJfvAYrxbqCcdkt1LXD1lHMTTd-.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "unclassified",
    "Year": 2025,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": "Maryland"
  },
  {
    "URL": "https://mgaleg.maryland.gov/cmte_testimony/2024/fin/19866_02132024_203842-713.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "Obstetrics_Gynecology, cardiology, psychiatry",
    "Year": 2022,
    "Focus Areas": "Bias and Fairness, Privacy and Security, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": "Maryland"
  },
  {
    "URL": "https://doi.nebraska.gov/sites/default/files/doc/IGD%20-%20-%20H1.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "unclassified",
    "Year": 2024,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": "Nebraska"
  },
  {
    "URL": "https://it.nv.gov/uploadedFiles/itnewnvgov/content/Governance/AI%20Guidelines.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "unclassified",
    "Year": 2023,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": "Nevada"
  },
  {
    "URL": "https://www.pa.gov/content/dam/copapwp-pagov/en/oa/documents/policies/eo/2023-19.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "unclassified",
    "Year": 2023,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": "Pennsylvania"
  },
  {
    "URL": "https://governor.wa.gov/sites/default/files/exe_order/24-01%20-%20Artificial%20Intelligence%20%28tmp%29.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "unclassified",
    "Year": 2024,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": "Washington"
  },
  {
    "URL": "https://watech.wa.gov/sites/default/files/2024-11/Initial%20Procurement%20Guidelines%20for%20GenAI%20Final.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "unclassified",
    "Year": 2024,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": "Washington"
  },
  {
    "URL": "https://www.allhealthpolicy.org/wp-content/uploads/2024/01/alliance-3-SignatureSeries24-final-1.pdf",
    "AI Applications": "['Clinical Decision Support', 'Clinical Documentation AI', 'Operational and Administrative Automation', 'Patient-facing AI', 'Robotics and Surgical AI', 'Education and Training AI', 'Research and Clinical Trial AI', 'Public Health AI']",
    "Category": "Professional Medical Organization",
    "predicted_specialty": "unclassified",
    "Year": 2024,
    "Focus Areas": "Bias and Fairness, Privacy and Security, Transparency and Explainability, Ethics and Consent, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://mehi.masstech.org/sites/default/files/2022-04/privacy-and-security-guide.pdf",
    "AI Applications": [],
    "Category": "Academic Institution",
    "predicted_specialty": "psychiatry",
    "Year": 2015,
    "Focus Areas": "Privacy and Security, Ethics and Consent, Safety and Risk Management",
    "State": ""
  },
  {
    "URL": "https://pdfs.semanticscholar.org/e7e6/8e80da85a121864853f7de1ba83dfa9a1c3d.pdf",
    "AI Applications": "['Operational and Administrative Automation', 'Research and Clinical Trial AI', 'Clinical Documentation AI', 'Education and Training AI']",
    "Category": "Academic Institution",
    "predicted_specialty": "unclassified",
    "Year": 2024,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://ieomsociety.org/proceedings/2024germany/168.pdf",
    "AI Applications": [],
    "Category": "Academic Institution",
    "predicted_specialty": "unclassified",
    "Year": 2024,
    "Focus Areas": "Bias and Fairness, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.scitepress.org/Papers/2025/133095/133095.pdf",
    "AI Applications": "['Clinical Documentation AI', 'Operational and Administrative Automation', 'Patient-facing AI', 'Robotics and Surgical AI', 'Education and Training AI', 'Research and Clinical Trial AI', 'Public Health AI']",
    "Category": "Academic Institution",
    "predicted_specialty": "unclassified",
    "Year": 2025,
    "Focus Areas": "Bias and Fairness, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://pdfs.semanticscholar.org/7fa1/44eef185f0ecea7724fbcddffb7343fe1edf.pdf",
    "AI Applications": [],
    "Category": "Academic Institution",
    "predicted_specialty": "unclassified",
    "Year": 2021,
    "Focus Areas": "Bias and Fairness, Privacy and Security, Ethics and Consent, Safety and Risk Management",
    "State": ""
  },
  {
    "URL": "https://www.jrevmeds.com/article_211430_5bacafdc31021049a76d382bbcc9cbb8.pdf",
    "AI Applications": "['Clinical Decision Support', 'Medical Imaging AI', 'Patient-facing AI', 'Robotics and Surgical AI', 'Education and Training AI', 'Research and Clinical Trial AI']",
    "Category": "Academic Institution",
    "predicted_specialty": "unclassified",
    "Year": 2024,
    "Focus Areas": "Bias and Fairness, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.cureus.com/articles/305123-digital-health-policy-and-cybersecurity-regulations-regarding-artificial-intelligence-ai-implementation-in-healthcare.pdf",
    "AI Applications": "['Robotics and Surgical AI', 'Operational and Administrative Automation', 'Patient-facing AI', 'Education and Training AI', 'Public Health AI', 'Medical Imaging AI', 'Research and Clinical Trial AI', 'Clinical Documentation AI']",
    "Category": "Academic Institution",
    "predicted_specialty": "surgery",
    "Year": 2025,
    "Focus Areas": "Bias and Fairness, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.ijfmr.com/papers/2025/2/42672.pdf",
    "AI Applications": "['Public Health AI']",
    "Category": "Academic Institution",
    "predicted_specialty": "unclassified",
    "Year": 2021,
    "Focus Areas": "Bias and Fairness, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "http://www.bakerdonelson.com/files/Uploads/Documents/ONC-2015%20privacy-and-security-guide.pdf",
    "AI Applications": [],
    "Category": "Academic Institution",
    "predicted_specialty": "psychiatry",
    "Year": 2015,
    "Focus Areas": "Privacy and Security, Ethics and Consent, Safety and Risk Management",
    "State": ""
  },
  {
    "URL": "https://www.uapd.com/wp-content/uploads/Balancing-Good-Intentions.pdf",
    "AI Applications": [],
    "Category": "Academic Institution",
    "predicted_specialty": "unclassified",
    "Year": 2008,
    "Focus Areas": "Bias and Fairness, Privacy and Security, Ethics and Consent, Safety and Risk Management",
    "State": ""
  },
  {
    "URL": "https://www.cureusjournals.com/articles/3689-artificial-intelligence-and-privacy-concerns-balancing-innovation-with-security.pdf",
    "AI Applications": [],
    "Category": "Academic Institution",
    "predicted_specialty": "unclassified",
    "Year": 2025,
    "Focus Areas": "Bias and Fairness, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://houstonhealthlaw.scholasticahq.com/article/85152.pdf",
    "AI Applications": "['Patient-facing AI', 'Public Health AI', 'Clinical Documentation AI', 'Operational and Administrative Automation', 'Research and Clinical Trial AI', 'Medical Imaging AI']",
    "Category": "Professional Medical Organization",
    "predicted_specialty": "infectious_diseases",
    "Year": 2019,
    "Focus Areas": "Bias and Fairness, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://journalofethics.ama-assn.org/sites/joedb/files/2019-01/fred1-1902_1.pdf",
    "AI Applications": "['Patient-facing AI', 'Education and Training AI', 'Operational and Administrative Automation', 'Robotics and Surgical AI', 'Research and Clinical Trial AI', 'Clinical Decision Support', 'Medical Imaging AI']",
    "Category": "Professional Medical Organization",
    "predicted_specialty": "unclassified",
    "Year": 2019,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.ama-assn.org/system/files/2019-08/ai-2018-board-policy-summary.pdf",
    "AI Applications": "['Education and Training AI']",
    "Category": "Professional Medical Organization",
    "predicted_specialty": "unclassified",
    "Year": 2018,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://365.himss.org/sites/himss365/files/365/handouts/552564087/handout-BG4.pdf",
    "AI Applications": "['Patient-facing AI']",
    "Category": "Professional Medical Organization",
    "predicted_specialty": "unclassified",
    "Year": 2019,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Transparency and Explainability, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.aha.org/system/files/media/file/2024/06/opinion-order-in-aha-et-al-v-xavier-becerra-et-al-6-20-2024.pdf",
    "AI Applications": [],
    "Category": "Professional Medical Organization",
    "predicted_specialty": "unclassified",
    "Year": 1996,
    "Focus Areas": "Privacy and Security, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.healthit.gov/sites/default/files/interop-roadmap-sme-meeting-summary.pdf",
    "AI Applications": [],
    "Category": "Federal",
    "predicted_specialty": "unclassified",
    "Year": 2014,
    "Focus Areas": "Bias and Fairness, Privacy and Security, Ethics and Consent, Safety and Risk Management",
    "State": ""
  },
  {
    "URL": "https://ecqi.healthit.gov/sites/default/files/CMSdQMStrategicRoadmap_032822.pdf",
    "AI Applications": [],
    "Category": "Federal",
    "predicted_specialty": "unclassified",
    "Year": 2022,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.nlm.nih.gov/od/bor/Sep_2023_BOR_Minutes_Accessible.pdf",
    "AI Applications": "['Patient-facing AI', 'Operational and Administrative Automation']",
    "Category": "Federal",
    "predicted_specialty": "surgery",
    "Year": 2023,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.cms.gov/medicare/provider-enrollment-and-certification/qapi/downloads/qapifiveelements.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "unclassified",
    "Year": "",
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://sjud.senate.ca.gov/system/files/2025-04/sb-468-becker-sjud-analysis.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "unclassified",
    "Year": 2025,
    "Focus Areas": "Bias and Fairness, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": "California"
  },
  {
    "URL": "https://www.oregon.gov/oha/HSD/Medicaid-Policy/Documents/New-Initiatives-Implementation-Plan-Approval.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "unclassified",
    "Year": 2023,
    "Focus Areas": "Reliability and Performance, Privacy and Security, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": "Oregon"
  },
  {
    "URL": "https://www.oregon.gov/oha/HPA/OHIT/Documents/20250206-HITOC-FebPolicyandProgramUpdates.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "unclassified",
    "Year": 2025,
    "Focus Areas": "Bias and Fairness, Privacy and Security, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": "Oregon"
  },
  {
    "URL": "https://ago.vermont.gov/sites/ago/files/2025-04/Clearview%20Complaint%20-%204.25.2025%20Stamped%20Copy.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "unclassified",
    "Year": 2025,
    "Focus Areas": "Privacy and Security, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": "Vermont"
  },
  {
    "URL": "https://www.dmas.virginia.gov/media/qc1hcsdi/bmas-biennial-report-2023-2024-r.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "Obstetrics_Gynecology",
    "Year": 2023,
    "Focus Areas": "Reliability and Performance, Privacy and Security, Safety and Risk Management, Governance Committees",
    "State": "Virginia"
  },
  {
    "URL": "https://www.hca.wa.gov/assets/program/hca-it-strategic-plan.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "unclassified",
    "Year": 2025,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Safety and Risk Management, Governance Committees",
    "State": "Washington"
  },
  {
    "URL": "https://www.ehidc.org/sites/default/files/resources/files/Perspectives%20and%20Best%20Practices%20for%20Artificial%20Intelligence%20and%20Continuously%20Learning%20Systems%20in%20Healthcare.pdf",
    "AI Applications": "['Medical Imaging AI', 'Patient-facing AI', 'Education and Training AI', 'Research and Clinical Trial AI', 'Clinical Decision Support', 'Clinical Documentation AI', 'Operational and Administrative Automation', 'Robotics and Surgical AI', 'Public Health AI', 'Predictive Analytics']",
    "Category": "Academic Institution",
    "predicted_specialty": "endocrinology, infectious_diseases",
    "Year": 2018,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://jnm.snmjournals.org/content/jnumed/64/10/1509.full.pdf",
    "AI Applications": "['Medical Imaging AI', 'Robotics and Surgical AI', 'Clinical Decision Support']",
    "Category": "Academic Institution",
    "predicted_specialty": "radiology",
    "Year": 2023,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.medrxiv.org/content/10.1101/2024.12.30.24319785v1.full.pdf",
    "AI Applications": "['Clinical Documentation AI', 'Education and Training AI', 'Research and Clinical Trial AI', 'Medical Imaging AI']",
    "Category": "Academic Institution",
    "predicted_specialty": "unclassified",
    "Year": 2024,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://professionalismandvalue.org/wp-content/uploads/2021/02/Better_Care_at_Lower_Cost_The_Path_to_Continuously_Learning_Health_Care_in_America.pdf",
    "AI Applications": "['Clinical Decision Support']",
    "Category": "Academic Institution",
    "predicted_specialty": "surgery, Obstetrics_Gynecology, oncology, radiology, cardiology, pathology, gastroenterology, endocrinology, pulmonology, nephrology, psychiatry, pediatrics, neurology, infectious_diseases",
    "Year": 2013,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Safety and Risk Management",
    "State": ""
  },
  {
    "URL": "https://www.orfonline.org/public/uploads/posts/pdf/20230719010608.pdf",
    "AI Applications": "['Public Health AI', 'Patient-facing AI']",
    "Category": "Professional Medical Organization",
    "predicted_specialty": "radiology",
    "Year": 2020,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.ippapublicpolicy.org/file/paper/6628eddc69339.pdf",
    "AI Applications": "['Public Health AI']",
    "Category": "Academic Institution",
    "predicted_specialty": "unclassified",
    "Year": 2022,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://michiganross.umich.edu/sites/default/files/media/documents/2024/03/955%20Microsoft%202023-24%20ExecMAP%20Final%20Report.pdf",
    "AI Applications": "['Education and Training AI', 'Medical Imaging AI', 'Operational and Administrative Automation', 'Robotics and Surgical AI', 'Patient-facing AI', 'Research and Clinical Trial AI']",
    "Category": "Academic Institution",
    "predicted_specialty": "oncology",
    "Year": 2023,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.bsigroup.com/globalassets/localfiles/en-gb/about-bsi/nsb/innovation/mhra-ai-paper-2019.pdf",
    "AI Applications": "['Research and Clinical Trial AI']",
    "Category": "Academic Institution",
    "predicted_specialty": "unclassified",
    "Year": "",
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://connectedhi.com/wp-content/uploads/2022/04/CHIAITaskForceGMLPs.pdf",
    "AI Applications": [],
    "Category": "Professional Medical Organization",
    "predicted_specialty": "unclassified",
    "Year": "",
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://nottingham-repository.worktribe.com/preview/2062727/MacraeGoverningAIsafety.pdf",
    "AI Applications": "['Medical Imaging AI', 'Research and Clinical Trial AI']",
    "Category": "Academic Institution",
    "predicted_specialty": "unclassified",
    "Year": 2019,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.ijscia.com/wp-content/uploads/2025/04/Volume6-Issue2-Mar-Apr-No.869-381-386.pdf",
    "AI Applications": "['Clinical Documentation AI', 'Operational and Administrative Automation', 'Patient-facing AI', 'Education and Training AI', 'Robotics and Surgical AI', 'Research and Clinical Trial AI', 'Public Health AI', 'Medical Imaging AI', 'Clinical Decision Support', 'Predictive Analytics']",
    "Category": "Professional Medical Organization",
    "predicted_specialty": "unclassified",
    "Year": 2025,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://themedicon.com/pdf/medicalsciences/MCMS-08-292.pdf",
    "AI Applications": "['Operational and Administrative Automation']",
    "Category": "Academic Institution",
    "predicted_specialty": "ophthalmology",
    "Year": 2025,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Safety and Risk Management",
    "State": ""
  },
  {
    "URL": "https://sjr-publishing.com/wp-content/uploads/2019/03/Artificial-Intelligence-in-Healthcare-Management-and-its-Role-in-Supporting-General.pdf",
    "AI Applications": "['Operational and Administrative Automation', 'Public Health AI', 'Education and Training AI', 'Clinical Decision Support', 'Clinical Documentation AI', 'Medical Imaging AI', 'Research and Clinical Trial AI', 'Predictive Analytics', 'Patient-facing AI', 'Robotics and Surgical AI']",
    "Category": "Professional Medical Organization",
    "predicted_specialty": "unclassified",
    "Year": "",
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.ahima.org/media/023o4jwl/ahima-2024-2027-strategic-plan.pdf",
    "AI Applications": [],
    "Category": "Professional Medical Organization",
    "predicted_specialty": "unclassified",
    "Year": 2024,
    "Focus Areas": "Bias and Fairness, Privacy and Security, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://brand.amia.org/m/514c18c2cbc6e023/original/Microsoft-PowerPoint-About-25x5-Presentation-Slides.pdf",
    "AI Applications": [],
    "Category": "Professional Medical Organization",
    "predicted_specialty": "unclassified",
    "Year": 2026,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent",
    "State": ""
  },
  {
    "URL": "https://www.aha.org/system/files/media/file/2021/07/Whitepaper-AI-Driven-Clinical-Surveillance_TTalks.pdf",
    "AI Applications": "['Predictive Analytics']",
    "Category": "Professional Medical Organization",
    "predicted_specialty": "unclassified",
    "Year": "",
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Transparency and Explainability, Safety and Risk Management",
    "State": ""
  },
  {
    "URL": "https://www.aha.org/system/files/media/file/2019/05/lifelong-learning-physician-competency-development.pdf",
    "AI Applications": [],
    "Category": "Professional Medical Organization",
    "predicted_specialty": "unclassified",
    "Year": 2012,
    "Focus Areas": "Reliability and Performance, Privacy and Security, Safety and Risk Management",
    "State": ""
  },
  {
    "URL": "https://www.aspe.hhs.gov/sites/default/files/documents/4b65476c58e363735aa9065a82a35df4/PTAC-TCOC-RTS.pdf",
    "AI Applications": [],
    "Category": "Federal",
    "predicted_specialty": "oncology",
    "Year": 2016,
    "Focus Areas": "Reliability and Performance, Privacy and Security, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.cms.gov/medicare/medicare-fee-for-service-payment/hospitaloutpatientpps/downloads/payment-chronic-care-management-services-faqs.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "unclassified",
    "Year": 2016,
    "Focus Areas": "Reliability and Performance, Privacy and Security, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.cdss.ca.gov/ord/entres/getinfo/pdf/gh1.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "unclassified",
    "Year": 2004,
    "Focus Areas": "Privacy and Security, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": "California"
  },
  {
    "URL": "https://www.dhcs.ca.gov/services/ltc/Documents/AppendixB-Waiver-CA0139R06.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "unclassified",
    "Year": 2022,
    "Focus Areas": "Reliability and Performance, Privacy and Security, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": "California"
  },
  {
    "URL": "https://www.dhcs.ca.gov/provgovpart/Documents/GPP/GPP-Final-Evaluation-Report-6.18.19.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "surgery, psychiatry, ophthalmology",
    "Year": 2019,
    "Focus Areas": "Reliability and Performance, Privacy and Security, Safety and Risk Management",
    "State": "California"
  },
  {
    "URL": "https://portal.ct.gov/-/media/ohs/hsp/ohs-statewide-health-care-facilities-and-services-plan-2024.pdf",
    "AI Applications": "['Clinical Documentation AI', 'Education and Training AI', 'Research and Clinical Trial AI', 'Clinical Decision Support', 'Medical Imaging AI', 'Patient-facing AI']",
    "Category": "State",
    "predicted_specialty": "surgery, Obstetrics_Gynecology, oncology, radiology, cardiology, endocrinology, pulmonology, nephrology, psychiatry, pediatrics, ophthalmology, infectious_diseases",
    "Year": 2024,
    "Focus Areas": "Reliability and Performance, Privacy and Security, Safety and Risk Management",
    "State": "Connecticut"
  },
  {
    "URL": "https://www.legis.iowa.gov/docs/iac/rule/441.9.10.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "unclassified",
    "Year": 2024,
    "Focus Areas": "Privacy and Security, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": "Iowa"
  },
  {
    "URL": "https://www.health.ny.gov/health_care/medicaid/redesign/dsrip/pps_workshops/docs/2017-09-11_mco_bhic.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "psychiatry",
    "Year": 2008,
    "Focus Areas": "Reliability and Performance, Privacy and Security, Safety and Risk Management",
    "State": "New York"
  },
  {
    "URL": "https://www.health.ny.gov/health_care/medicaid/redesign/dsrip/docs/2016-08-12_integrated_care_faqs_redln.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "psychiatry",
    "Year": 2016,
    "Focus Areas": "Reliability and Performance, Privacy and Security, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": "New York"
  },
  {
    "URL": "https://www.dshs.wa.gov/sites/default/files/ALTSA/rcs/documents/SOP/Chapter%206%20-%20CMAR.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "unclassified",
    "Year": 2025,
    "Focus Areas": "Reliability and Performance, Privacy and Security, Safety and Risk Management",
    "State": "Washington"
  },
  {
    "URL": "https://z-inspection.org/wp-content/uploads/2021/12/Laufenberg_Werthmann_Frederike_Teresa_20_05_21_master.pdf",
    "AI Applications": "['Medical Imaging AI', 'Patient-facing AI', 'Robotics and Surgical AI', 'Operational and Administrative Automation']",
    "Category": "Academic Institution",
    "predicted_specialty": "cardiology",
    "Year": 2021,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.oecd.org/content/dam/oecd/en/publications/reports/2021/06/laying-the-foundations-for-artificial-intelligence-in-health_2ac0de6a/3f62817d-en.pdf",
    "AI Applications": "['Research and Clinical Trial AI', 'Public Health AI', 'Operational and Administrative Automation', 'Medical Imaging AI', 'Robotics and Surgical AI', 'Clinical Decision Support', 'Predictive Analytics', 'Patient-facing AI', 'Clinical Documentation AI']",
    "Category": "Professional Medical Organization",
    "predicted_specialty": "oncology, radiology, pulmonology, infectious_diseases",
    "Year": 2021,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://s3.ca-central-1.amazonaws.com/assets.jmir.org/assets/preprints/preprint-71034-submitted.pdf",
    "AI Applications": [],
    "Category": "Professional Medical Organization",
    "predicted_specialty": "neurology",
    "Year": 2025,
    "Focus Areas": "Reliability and Performance, Transparency and Explainability, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://assets.cureusjournals.com/artifacts/upload/editorial/pdf/3758/20250429-48604-appuuq.pdf",
    "AI Applications": "['Education and Training AI', 'Patient-facing AI']",
    "Category": "Academic Institution",
    "predicted_specialty": "unclassified",
    "Year": 2025,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent",
    "State": ""
  },
  {
    "URL": "https://searchlf.ama-assn.org/letter/documentDownload?uri=/unstructured/binary/letter/LETTERS/lfcmts.zip/2025-1-27-Letter-to-Wu-re-2026-MA-Rule-Comments-v3.pdf",
    "AI Applications": [],
    "Category": "Professional Medical Organization",
    "predicted_specialty": "psychiatry",
    "Year": 2025,
    "Focus Areas": "Reliability and Performance, Privacy and Security, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.ama-assn.org/system/files/2022-pfs-qpp-proposed-rule.pdf",
    "AI Applications": [],
    "Category": "Professional Medical Organization",
    "predicted_specialty": "surgery, oncology, psychiatry",
    "Year": 2022,
    "Focus Areas": "Reliability and Performance, Privacy and Security, Safety and Risk Management",
    "State": ""
  },
  {
    "URL": "https://www.himss.org/sites/hde/files/media/file/2023/10/23/davies-2023-case-study-dchhs-public-health-final-august-29-2023.pdf",
    "AI Applications": [],
    "Category": "Professional Medical Organization",
    "predicted_specialty": "infectious_diseases",
    "Year": 2023,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management",
    "State": ""
  },
  {
    "URL": "https://www.healthit.gov/sites/default/files/facas/2024-04-11_Presenter_Biographies.pdf",
    "AI Applications": "['Public Health AI']",
    "Category": "Federal",
    "predicted_specialty": "unclassified",
    "Year": 2024,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.nibib.nih.gov/sites/default/files/2024-05/NIBIB_FY25_CJ_508_2.pdf",
    "AI Applications": [],
    "Category": "Federal",
    "predicted_specialty": "surgery, oncology, radiology, pathology, infectious_diseases",
    "Year": 2025,
    "Focus Areas": "Reliability and Performance, Transparency and Explainability, Safety and Risk Management",
    "State": ""
  },
  {
    "URL": "https://cppa.ca.gov/regulations/pdf/ccpa_updates_cyber_risk_admt_ins_text.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "unclassified",
    "Year": 2024,
    "Focus Areas": "Privacy and Security, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": "California"
  },
  {
    "URL": "https://www.in.gov/mph/cdo/files/State-of-Indiana-State-Agency-AI-Systems-Standard.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "unclassified",
    "Year": 2024,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": "Indiana"
  },
  {
    "URL": "https://www.in.gov/mph/files/State-of-Indiana-Standard-AI-Readiness-Assessment-Methodology.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "unclassified",
    "Year": 2025,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": "Indiana"
  },
  {
    "URL": "https://www.supremecourt.ohio.gov/sites/disputeResolution/conference/2020/agenda/D2/D2.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "unclassified",
    "Year": 2020,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": "Ohio"
  },
  {
    "URL": "https://www.oregon.gov/eis/cyber-security-services/Documents/Interim_AI_Guidelines_V1.5%201.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "unclassified",
    "Year": 2024,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": "Oregon"
  },
  {
    "URL": "https://capitol.texas.gov/tlodocs/89R/billtext/pdf/HB00149I.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "unclassified",
    "Year": "",
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": "Texas"
  },
  {
    "URL": "https://watech.wa.gov/sites/default/files/2023-11/HISPI_Trusted_Artificial_Intelligence_%28TAI%29_Model_Top_20_10-19-2023.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "unclassified",
    "Year": 2023,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": "Washington"
  },
  {
    "URL": "https://reports.weforum.org/docs/WEF_Earning_Trust_for_AI_in_Health_2025.pdf",
    "AI Applications": [],
    "Category": "Professional Medical Organization",
    "predicted_specialty": "unclassified",
    "Year": 2025,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.biodiritto.org/ocmultibinary/download/4592/53605/1/3fe7f8ed9439da49d6ecd8fdbd829bed/file/2024a_205_signed.pdf",
    "AI Applications": [],
    "Category": "Academic Institution",
    "predicted_specialty": "unclassified",
    "Year": "",
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://careq.ucsd.edu/_files/CareQ%20FINAL%20slides.pdf",
    "AI Applications": "['Clinical Decision Support']",
    "Category": "Academic Institution",
    "predicted_specialty": "unclassified",
    "Year": 2024,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management",
    "State": ""
  },
  {
    "URL": "https://lawcat.berkeley.edu/record/1312621/files/Hobart.pdf",
    "AI Applications": [],
    "Category": "Academic Institution",
    "predicted_specialty": "neurology",
    "Year": 2023,
    "Focus Areas": "Bias and Fairness, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://jscholarship.library.jhu.edu/bitstream/1774.2/59992/1/ZHAN-DISSERTATION-2018.pdf",
    "AI Applications": "['Clinical Decision Support', 'Predictive Analytics', 'Patient-facing AI']",
    "Category": "Academic Institution",
    "predicted_specialty": "cardiology, neurology, infectious_diseases",
    "Year": 2018,
    "Focus Areas": "Reliability and Performance, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.accessdata.fda.gov/cdrh_docs/pdf22/K223659.pdf",
    "AI Applications": [],
    "Category": "Federal",
    "predicted_specialty": "oncology, neurology",
    "Year": 2023,
    "Focus Areas": "Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://empowerprogram.hhs.gov/emPOWER-AI-Job-Aid.pdf",
    "AI Applications": [],
    "Category": "Federal",
    "predicted_specialty": "unclassified",
    "Year": "",
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.healthit.gov/sites/default/files/facas/2021-01-13_FDA_Digital_Health_Center_Presentation.pdf",
    "AI Applications": [],
    "Category": "Federal",
    "predicted_specialty": "unclassified",
    "Year": 2020,
    "Focus Areas": "Bias and Fairness, Privacy and Security, Safety and Risk Management",
    "State": ""
  },
  {
    "URL": "https://www.healthit.gov/sites/default/files/facas/2024-10-17_Draft_HITAC_Annual_Report_for_FY24_508.pdf",
    "AI Applications": "['Public Health AI']",
    "Category": "Federal",
    "predicted_specialty": "unclassified",
    "Year": 2024,
    "Focus Areas": "Bias and Fairness, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management",
    "State": ""
  },
  {
    "URL": "https://seed.nih.gov/sites/default/files/2024-01/Regulatory-Knowledge-Guide-for-Digital-Health_0.pdf",
    "AI Applications": [],
    "Category": "Federal",
    "predicted_specialty": "unclassified",
    "Year": 2023,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management",
    "State": ""
  },
  {
    "URL": "https://www.nist.gov/system/files/documents/2018/10/19/who_will_own_the_secrets_in_our_genes_woodrow_wilson_center.pdf",
    "AI Applications": [],
    "Category": "Federal",
    "predicted_specialty": "oncology",
    "Year": 2017,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Transparency and Explainability, Ethics and Consent, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://doc.alabama.gov/docs/AdminRegs/AR631.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "psychiatry",
    "Year": 2024,
    "Focus Areas": "Reliability and Performance, Privacy and Security, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": "Alabama"
  },
  {
    "URL": "https://sbud.senate.ca.gov/sites/sbud.senate.ca.gov/files/California%20at%20the%20Forefront%20Backgrounder.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "unclassified",
    "Year": 2023,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": "California"
  },
  {
    "URL": "https://apcp.assembly.ca.gov/sites/privacycp.assembly.ca.gov/files/201920200AB1760_AB_1760_ABPCA_04-12-2019_Assembly_Privacy_And_Consumer_Protection_Committee_87824.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "unclassified",
    "Year": 2019,
    "Focus Areas": "Privacy and Security, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": "California"
  },
  {
    "URL": "https://dhss.delaware.gov/dph/chca/files/newbornhearingscreeninganddiagnosticcenter.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "pediatrics, otolaryngology",
    "Year": "",
    "Focus Areas": "Privacy and Security, Safety and Risk Management, Governance Committees",
    "State": "Delaware"
  },
  {
    "URL": "https://health.hawaii.gov/ddd/files/2022/02/Hawaii-IDD-Waiver-Rates-Effective-7-1-2021-Issued-2-28-2022.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "psychiatry",
    "Year": 2021,
    "Focus Areas": "Reliability and Performance, Privacy and Security, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": "Hawaii"
  },
  {
    "URL": "https://www.in.gov/health/files/Definitions.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "unclassified",
    "Year": 2012,
    "Focus Areas": "Reliability and Performance, Privacy and Security, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": "Indiana"
  },
  {
    "URL": "https://www.in.gov/idoi/files/IN_state_required_benefits.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "unclassified",
    "Year": "",
    "Focus Areas": "Reliability and Performance, Safety and Risk Management, Governance Committees",
    "State": "Indiana"
  },
  {
    "URL": "https://www.in.gov/medicaid/providers/files/bulletins/BT2022121.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "surgery, oncology, radiology, cardiology, pathology, gastroenterology, pulmonology, nephrology, neurology, infectious_diseases",
    "Year": 2023,
    "Focus Areas": "Reliability and Performance, Privacy and Security, Safety and Risk Management, Governance Committees",
    "State": "Indiana"
  },
  {
    "URL": "https://www.legis.iowa.gov/docs/code/321.276.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "unclassified",
    "Year": 2010,
    "Focus Areas": "Privacy and Security, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": "Iowa"
  },
  {
    "URL": "https://ksbn.kansas.gov/wp-content/uploads/NPA/60-16-102.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "unclassified",
    "Year": 2000,
    "Focus Areas": "Reliability and Performance, Privacy and Security, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": "Kansas"
  },
  {
    "URL": "https://www.chfs.ky.gov/agencies/os/oig/Kentucky%20Regulations%20and%20Statutes/Telehealth%20Terminology%20Glossary%20FINAL%20-%20July%202022.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "unclassified",
    "Year": 2022,
    "Focus Areas": "Privacy and Security, Ethics and Consent, Safety and Risk Management",
    "State": "Kentucky"
  },
  {
    "URL": "https://www.health.ny.gov/health_care/medicaid/program/medicaid_health_homes/docs/restriction_exception_codes.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "unclassified",
    "Year": 2025,
    "Focus Areas": "Reliability and Performance, Privacy and Security, Safety and Risk Management, Governance Committees",
    "State": "New York"
  },
  {
    "URL": "https://www.health.ny.gov/facilities/nursing/rights/appeal_decisions/docs/DA21_5651_Redacted.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "unclassified",
    "Year": 2021,
    "Focus Areas": "Reliability and Performance, Privacy and Security, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": "New York"
  },
  {
    "URL": "https://dam.assets.ohio.gov/image/upload/medicaid.ohio.gov/Providers/Billing/BillingInstructions/ModifiersODM.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "surgery",
    "Year": 2017,
    "Focus Areas": "Reliability and Performance, Privacy and Security, Safety and Risk Management, Governance Committees",
    "State": "Ohio"
  },
  {
    "URL": "https://www.oregon.gov/doc/rules-and-policies/Documents/291-124-health-services-dme.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "surgery",
    "Year": 2024,
    "Focus Areas": "Reliability and Performance, Privacy and Security, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": "Oregon"
  },
  {
    "URL": "https://www.pa.gov/content/dam/copapwp-pagov/en/dhs/documents/docs/publications/documents/2023-medicaid-state-plan/0018.A%20Attachment.3.1L-1.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "unclassified",
    "Year": 2015,
    "Focus Areas": "Reliability and Performance, Privacy and Security, Safety and Risk Management, Governance Committees",
    "State": "Pennsylvania"
  },
  {
    "URL": "https://www.team-nb.org/wp-content/uploads/2024/11/Team-NB-PositionPaper-AI-in-MD-Questionnaire-V1-20241125.pdf",
    "AI Applications": [],
    "Category": "Professional Medical Organization",
    "predicted_specialty": "unclassified",
    "Year": 2022,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.imdrf.org/sites/default/files/2021-10/Machine%20Learning-enabled%20Medical%20Devices%20-%20A%20subset%20of%20Artificial%20Intelligence-enabled%20Medical%20Devices%20-%20Key%20Terms%20and%20Definitions.pdf",
    "AI Applications": "['Medical Imaging AI']",
    "Category": "Professional Medical Organization",
    "predicted_specialty": "unclassified",
    "Year": 2021,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.imdrf.org/sites/default/files/2022-05/IMDRF%20AIMD%20WG%20Final%20Document%20N67.pdf",
    "AI Applications": [],
    "Category": "Professional Medical Organization",
    "predicted_specialty": "unclassified",
    "Year": 2022,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.gwlr.org/wp-content/uploads/2023/03/91-Geo.-Wash.-L.-Rev.-79-2023.pdf",
    "AI Applications": "['Patient-facing AI', 'Clinical Decision Support', 'Clinical Documentation AI', 'Medical Imaging AI', 'Robotics and Surgical AI', 'Education and Training AI', 'Operational and Administrative Automation', 'Research and Clinical Trial AI']",
    "Category": "Academic Institution",
    "predicted_specialty": "oncology, radiology, cardiology, dermatology, infectious_diseases",
    "Year": 2023,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://pathologyinnovationcc.org/s/R_1673131960448.pdf",
    "AI Applications": "['Medical Imaging AI', 'Research and Clinical Trial AI', 'Robotics and Surgical AI']",
    "Category": "Professional Medical Organization",
    "predicted_specialty": "unclassified",
    "Year": 2022,
    "Focus Areas": "Reliability and Performance, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://haiweb.org/storage/2023/03/MDR-AIAct_OnePager_FINAL.pdf",
    "AI Applications": [],
    "Category": "Professional Medical Organization",
    "predicted_specialty": "unclassified",
    "Year": 2023,
    "Focus Areas": "Bias and Fairness, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "http://www.sciencepolicyjournal.org/uploads/5/4/3/4/5434385/dortche_etal_jspg_21-3.pdf",
    "AI Applications": [],
    "Category": "Professional Medical Organization",
    "predicted_specialty": "unclassified",
    "Year": 2013,
    "Focus Areas": "Bias and Fairness, Transparency and Explainability, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://media.path.org/documents/AI_regulatory_landscape_FINAL.pdf",
    "AI Applications": [],
    "Category": "Professional Medical Organization",
    "predicted_specialty": "unclassified",
    "Year": 2023,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://ceur-ws.org/Vol-3456/paper1-2.pdf",
    "AI Applications": "['Patient-facing AI']",
    "Category": "Academic Institution",
    "predicted_specialty": "unclassified",
    "Year": 2023,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://ceur-ws.org/Vol-3264/HEDA22_paper_2.pdf",
    "AI Applications": [],
    "Category": "Academic Institution",
    "predicted_specialty": "unclassified",
    "Year": 2021,
    "Focus Areas": "Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://journal.emwa.org/artificial-intelligence-and-digital-health/intelligent-use-of-artificial-intelligence-for-systematic-reviews-of-medical-devices/article/5242/intelligent-use-of-artificial-intelligence-for-systematic-reviews-of-medical-devices.pdf",
    "AI Applications": "['Research and Clinical Trial AI', 'Clinical Documentation AI']",
    "Category": "Professional Medical Organization",
    "predicted_specialty": "unclassified",
    "Year": 2017,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://hai.stanford.edu/assets/files/2022-06/HAI%20Policy%20Brief%20-%20Toward%20Stronger%20FDA%20Approval%20Standards%20for%20AI%20Medical%20Devices_1.pdf",
    "AI Applications": [],
    "Category": "Professional Medical Organization",
    "predicted_specialty": "unclassified",
    "Year": 2015,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://ideas.dickinsonlaw.psu.edu/context/fac-works/article/1342/viewcontent/91_Geo._Wash._L._Rev._79__2023_.pdf",
    "AI Applications": "['Patient-facing AI', 'Clinical Decision Support', 'Clinical Documentation AI', 'Medical Imaging AI', 'Robotics and Surgical AI', 'Education and Training AI', 'Operational and Administrative Automation', 'Research and Clinical Trial AI']",
    "Category": "Professional Medical Organization",
    "predicted_specialty": "oncology, radiology, cardiology, dermatology, infectious_diseases",
    "Year": 2023,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://static1.squarespace.com/static/603ab50ab81d5532a0a4a42b/t/67637a56f2d7a7358eeee78e/1734572630486/EU1_1732560281917.pdf",
    "AI Applications": [],
    "Category": "Professional Medical Organization",
    "predicted_specialty": "unclassified",
    "Year": 2022,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.bsigroup.com/globalassets/meddev/localfiles/fr-fr/whitepapers/md---machine_learning_ai_in_medical_devices.pdf",
    "AI Applications": "['Robotics and Surgical AI']",
    "Category": "Nonprofit",
    "predicted_specialty": "unclassified",
    "Year": 2020,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://asiaactual.com/wp-content/uploads/2022/06/Singapore-HSA-regulatory-guidelines-for-software-medical-devices-a-life-cycle-approach_r2-2022-apr-pub.pdf",
    "AI Applications": "['Robotics and Surgical AI']",
    "Category": "Professional Medical Organization",
    "predicted_specialty": "unclassified",
    "Year": 2022,
    "Focus Areas": "Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://triangle-octagon-8fxh.squarespace.com/s/Jap_000266100.pdf",
    "AI Applications": "['Patient-facing AI', 'Robotics and Surgical AI', 'Medical Imaging AI']",
    "Category": "Academic Institution",
    "predicted_specialty": "surgery, oncology, radiology, cardiology, pathology, gastroenterology",
    "Year": 2023,
    "Focus Areas": "Reliability and Performance, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://medtech.citeline.com/-/media/supporting-documents/medtech-insight/2021/12/d1221int_1.pdf",
    "AI Applications": "['Medical Imaging AI']",
    "Category": "Professional Medical Organization",
    "predicted_specialty": "unclassified",
    "Year": 2021,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.gmp-navigator.com/files/guidemgr/IMDRF%20AIMD%20WG%20Final%20Document%20N67.pdf",
    "AI Applications": [],
    "Category": "Professional Medical Organization",
    "predicted_specialty": "unclassified",
    "Year": 2022,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://medtech.citeline.com/-/media/supporting-documents/medtech-insight/2021/12/d1221who_1.pdf",
    "AI Applications": "['Education and Training AI', 'Research and Clinical Trial AI', 'Public Health AI', 'Clinical Decision Support', 'Patient-facing AI', 'Medical Imaging AI']",
    "Category": "Professional Medical Organization",
    "predicted_specialty": "Obstetrics_Gynecology, oncology, radiology, gastroenterology, infectious_diseases",
    "Year": 2021,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://images.chemycal.com/Media/Files/medical-technology-industry-perspective-on-the-final-ai-act-1.pdf",
    "AI Applications": [],
    "Category": "Professional Medical Organization",
    "predicted_specialty": "unclassified",
    "Year": 2024,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://fsi9-prod.s3.us-west-1.amazonaws.com/s3fs-public/2023-11/2023-11-01_-_allison_gilbert-_regulating_ai_lessons_from_medical_devices.pdf",
    "AI Applications": "['Medical Imaging AI']",
    "Category": "Professional Medical Organization",
    "predicted_specialty": "unclassified",
    "Year": 2019,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.cureus.com/articles/310024-revolutionizing-acute-stroke-care-a-review-of-food-and-drug-administration-approved-software-as-medical-devices-for-stroke-triage.pdf",
    "AI Applications": "['Medical Imaging AI', 'Patient-facing AI', 'Robotics and Surgical AI', 'Education and Training AI', 'Research and Clinical Trial AI']",
    "Category": "Professional Medical Organization",
    "predicted_specialty": "radiology, neurology",
    "Year": 2024,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.ahima.org/media/01ppmsog/ahima-ncai_issue_brief.pdf",
    "AI Applications": "['Clinical Documentation AI', 'Operational and Administrative Automation', 'Education and Training AI', 'Research and Clinical Trial AI', 'Patient-facing AI', 'Robotics and Surgical AI', 'Clinical Decision Support', 'Medical Imaging AI', 'Public Health AI']",
    "Category": "Professional Medical Organization",
    "predicted_specialty": "unclassified",
    "Year": 2024,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.ahima.org/media/raojd2ut/2019-ahima-annual-report.pdf",
    "AI Applications": [],
    "Category": "Professional Medical Organization",
    "predicted_specialty": "unclassified",
    "Year": 2019,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Transparency and Explainability, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.ama-assn.org/system/files/ai-taxonomy-webinar-slides.pdf",
    "AI Applications": [],
    "Category": "Professional Medical Organization",
    "predicted_specialty": "unclassified",
    "Year": 2022,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.ama-assn.org/system/files/2019-08/ai-2018-board-report.pdf",
    "AI Applications": "['Education and Training AI', 'Medical Imaging AI', 'Clinical Decision Support', 'Clinical Documentation AI', 'Operational and Administrative Automation', 'Patient-facing AI', 'Robotics and Surgical AI', 'Research and Clinical Trial AI', 'Public Health AI', 'Predictive Analytics']",
    "Category": "Professional Medical Organization",
    "predicted_specialty": "unclassified",
    "Year": 2018,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Transparency and Explainability, Ethics and Consent, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://journalofethics.ama-assn.org/sites/default/files/2019-01/cscm3-1902_0.pdf",
    "AI Applications": "['Robotics and Surgical AI']",
    "Category": "Professional Medical Organization",
    "predicted_specialty": "surgery",
    "Year": 2019,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://brand.amia.org/m/1861f3a188c8c8a1/original/fda-cds-webinar-slides.pdf",
    "AI Applications": "['Clinical Decision Support']",
    "Category": "Professional Medical Organization",
    "predicted_specialty": "unclassified",
    "Year": 2016,
    "Focus Areas": "Reliability and Performance, Privacy and Security, Ethics and Consent, Safety and Risk Management",
    "State": ""
  },
  {
    "URL": "https://brand.amia.org/m/1f4f5a356b7be37b/original/Friends-of-ASTP_Introduction-to-HHS-Secretary.pdf",
    "AI Applications": [],
    "Category": "Professional Medical Organization",
    "predicted_specialty": "unclassified",
    "Year": 2025,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://greaterkansascity.himss.org/sites/hde/files/media/file/2024/10/01/tvgh-davies-award-case-study-smart-crtical-care.pdf",
    "AI Applications": "['Predictive Analytics', 'Education and Training AI']",
    "Category": "Professional Medical Organization",
    "predicted_specialty": "pulmonology, nephrology",
    "Year": 2024,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Transparency and Explainability, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://centralsouthernohio.himss.org/sites/hde/files/2023-12/3-cso-himss-fy20-presentation-cleveland-clinic-innovations.pdf",
    "AI Applications": [],
    "Category": "Professional Medical Organization",
    "predicted_specialty": "unclassified",
    "Year": 2011,
    "Focus Areas": "Reliability and Performance",
    "State": ""
  },
  {
    "URL": "https://www.himss.org/sites/hde/files/healthtech-summit-2024-awards-innovation.pdf",
    "AI Applications": [],
    "Category": "Professional Medical Organization",
    "predicted_specialty": "unclassified",
    "Year": "",
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Transparency and Explainability",
    "State": ""
  },
  {
    "URL": "https://centralsouthernohio.himss.org/sites/hde/files/2023-12/3.staynings_abed-1.pdf",
    "AI Applications": [],
    "Category": "Professional Medical Organization",
    "predicted_specialty": "infectious_diseases",
    "Year": 2020,
    "Focus Areas": "Reliability and Performance, Privacy and Security, Ethics and Consent, Safety and Risk Management",
    "State": ""
  },
  {
    "URL": "https://trustees.aha.org/sites/default/files/TI-0718-glaser.pdf",
    "AI Applications": "['Operational and Administrative Automation', 'Clinical Documentation AI', 'Patient-facing AI', 'Education and Training AI', 'Public Health AI', 'Clinical Decision Support', 'Research and Clinical Trial AI', 'Medical Imaging AI', 'Predictive Analytics']",
    "Category": "Professional Medical Organization",
    "predicted_specialty": "unclassified",
    "Year": 2018,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://aspe.hhs.gov/sites/default/files/private/pdf/74711/HITcb.pdf",
    "AI Applications": [],
    "Category": "Federal",
    "predicted_specialty": "surgery, Obstetrics_Gynecology, oncology, radiology, cardiology, endocrinology, pulmonology, psychiatry, pediatrics, otolaryngology, infectious_diseases",
    "Year": 2006,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Safety and Risk Management",
    "State": ""
  },
  {
    "URL": "https://www.healthit.gov/sites/default/files/page/2019-12/2019-10-16_ISP_TF_Final_Report_signed_508.pdf",
    "AI Applications": [],
    "Category": "Federal",
    "predicted_specialty": "unclassified",
    "Year": 2019,
    "Focus Areas": "Reliability and Performance, Privacy and Security, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://heal.nih.gov/files/2021-11/HEAL_Annual_Report_05-14-21.pdf",
    "AI Applications": [],
    "Category": "Federal",
    "predicted_specialty": "psychiatry, neurology, infectious_diseases",
    "Year": 2021,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.nichd.nih.gov/sites/default/files/inline-files/PRGLAC_Progress_Report.pdf",
    "AI Applications": [],
    "Category": "Federal",
    "predicted_specialty": "Obstetrics_Gynecology, cardiology, pediatrics, infectious_diseases",
    "Year": 2024,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Safety and Risk Management",
    "State": ""
  },
  {
    "URL": "https://www.nhlbi.nih.gov/sites/default/files/media/docs/Use_of_a_community_advisory_board.29.2022.pdf",
    "AI Applications": "['Research and Clinical Trial AI']",
    "Category": "Federal",
    "predicted_specialty": "unclassified",
    "Year": 2022,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Transparency and Explainability",
    "State": ""
  },
  {
    "URL": "https://www.oregon.gov/oha/HPA/HP/HCMOPageDocs/046-Report.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "unclassified",
    "Year": 2025,
    "Focus Areas": "Reliability and Performance, Privacy and Security, Safety and Risk Management, Governance Committees",
    "State": "Oregon"
  },
  {
    "URL": "https://www.hca.wa.gov/assets/program/shared-decision-making-workshop-slides-january-11-2024.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "surgery, Obstetrics_Gynecology, oncology, psychiatry",
    "Year": 2024,
    "Focus Areas": "Reliability and Performance, Safety and Risk Management",
    "State": "Washington"
  },
  {
    "URL": "https://pdfs.semanticscholar.org/410f/ab542fe306984aa7e7433565cc876264f948.pdf",
    "AI Applications": "['Clinical Decision Support', 'Patient-facing AI', 'Clinical Documentation AI', 'Medical Imaging AI', 'Predictive Analytics', 'Education and Training AI']",
    "Category": "Academic Institution",
    "predicted_specialty": "psychiatry",
    "Year": 2018,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.thempsfoundation.org/docs/foundationlibraries/foundation-default-library/white-papers/ai-white-paper_the-mps-foundation.pdf",
    "AI Applications": "['Clinical Decision Support', 'Research and Clinical Trial AI', 'Medical Imaging AI', 'Patient-facing AI', 'Clinical Documentation AI', 'Education and Training AI']",
    "Category": "Professional Medical Organization",
    "predicted_specialty": "Obstetrics_Gynecology, endocrinology",
    "Year": 2022,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.jabfm.org/content/jabfp/36/2/221.full.pdf",
    "AI Applications": "['Patient-facing AI', 'Public Health AI']",
    "Category": "Professional Medical Organization",
    "predicted_specialty": "unclassified",
    "Year": 2022,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Governance Committees",
    "State": ""
  },
  {
    "URL": "http://www.jatit.org/volumes/Vol103No9/8Vol103No9.pdf",
    "AI Applications": "['Clinical Documentation AI', 'Medical Imaging AI', 'Education and Training AI', 'Research and Clinical Trial AI', 'Patient-facing AI', 'Clinical Decision Support', 'Operational and Administrative Automation', 'Public Health AI', 'Predictive Analytics', 'Robotics and Surgical AI']",
    "Category": "Academic Institution",
    "predicted_specialty": "oncology, radiology",
    "Year": 2025,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Transparency and Explainability, Ethics and Consent, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://mail.meddocsonline.org/journal-of-case-reports-and-medical-images/ai-and-it-in-medical-imaging-case-reports.pdf",
    "AI Applications": "['Medical Imaging AI', 'Operational and Administrative Automation', 'Public Health AI', 'Clinical Decision Support', 'Clinical Documentation AI', 'Patient-facing AI', 'Robotics and Surgical AI', 'Education and Training AI']",
    "Category": "Academic Institution",
    "predicted_specialty": "radiology",
    "Year": 2025,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://med.stanford.edu/content/dam/sm/healthcare-ai/documents/Unlocking-New-Opportunities-for-AI-enabled-Diagnosis-2-.pdf",
    "AI Applications": "['Medical Imaging AI', 'Patient-facing AI', 'Clinical Decision Support']",
    "Category": "Professional Medical Organization",
    "predicted_specialty": "cardiology, pulmonology",
    "Year": 2022,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Transparency and Explainability, Safety and Risk Management",
    "State": ""
  },
  {
    "URL": "https://open.mitchellhamline.edu/context/facsch/article/1519/viewcontent/pope_maine_Patient_Decision_Aids.pdf",
    "AI Applications": [],
    "Category": "Academic Institution",
    "predicted_specialty": "surgery",
    "Year": 2022,
    "Focus Areas": "Reliability and Performance, Privacy and Security, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://digitalcommons.mainelaw.maine.edu/context/mlr/article/1754/viewcontent/vol74_mlr_73.pdf",
    "AI Applications": [],
    "Category": "Academic Institution",
    "predicted_specialty": "unclassified",
    "Year": 2022,
    "Focus Areas": "Reliability and Performance, Privacy and Security, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.hks.harvard.edu/sites/default/files/centers/mrcbg/Final_AWP_258.pdf",
    "AI Applications": "['Clinical Documentation AI']",
    "Category": "Academic Institution",
    "predicted_specialty": "endocrinology",
    "Year": 2025,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Transparency and Explainability, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://namedicinestg.wpengine.com/wp-content/uploads/2022/09/Meeting-the-Moment-Addressing-Barriers-and-Facilitating-Clinical-Adoption.pdf",
    "AI Applications": "['Clinical Decision Support', 'Medical Imaging AI', 'Research and Clinical Trial AI', 'Predictive Analytics', 'Patient-facing AI', 'Public Health AI', 'Clinical Documentation AI', 'Operational and Administrative Automation', 'Education and Training AI']",
    "Category": "Academic Institution",
    "predicted_specialty": "radiology, cardiology, infectious_diseases",
    "Year": 2022,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://jme.bmj.com/content/medethics/47/12/e3.full.pdf",
    "AI Applications": "['Clinical Decision Support', 'Medical Imaging AI', 'Patient-facing AI', 'Robotics and Surgical AI', 'Predictive Analytics', 'Research and Clinical Trial AI']",
    "Category": "Professional Medical Organization",
    "predicted_specialty": "unclassified",
    "Year": 2019,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://link.springer.com/content/pdf/10.1186/s12911-020-01332-6.pdf",
    "AI Applications": "['Clinical Decision Support', 'Medical Imaging AI', 'Predictive Analytics']",
    "Category": "Academic Institution",
    "predicted_specialty": "cardiology",
    "Year": 2020,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://openheart.bmj.com/content/openhrt/10/2/e002432.full.pdf",
    "AI Applications": "['Clinical Decision Support', 'Medical Imaging AI', 'Predictive Analytics', 'Research and Clinical Trial AI', 'Patient-facing AI']",
    "Category": "Academic Institution",
    "predicted_specialty": "cardiology",
    "Year": 2023,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Transparency and Explainability",
    "State": ""
  },
  {
    "URL": "https://www.jkimsu.com/jkimsu-vol13no3/JKIMSU,%20Vol.%2013,%20No.%203,%20July-September%202024%20Page%2014-24.pdf",
    "AI Applications": "['Medical Imaging AI', 'Operational and Administrative Automation', 'Patient-facing AI', 'Education and Training AI', 'Research and Clinical Trial AI', 'Public Health AI', 'Clinical Decision Support', 'Predictive Analytics', 'Robotics and Surgical AI']",
    "Category": "Academic Institution",
    "predicted_specialty": "Obstetrics_Gynecology, oncology, radiology, neurology",
    "Year": 2024,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Transparency and Explainability, Ethics and Consent, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://imrjr.com/wp-content/uploads/2025/04/IMRJR.2025.020408.pdf",
    "AI Applications": "['Medical Imaging AI', 'Clinical Decision Support', 'Education and Training AI', 'Research and Clinical Trial AI', 'Public Health AI', 'Operational and Administrative Automation']",
    "Category": "Professional Medical Organization",
    "predicted_specialty": "unclassified",
    "Year": 2025,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://premierscience.com/wp-content/uploads/2024/10/pjai-24-405.pdf",
    "AI Applications": "['Medical Imaging AI', 'Clinical Decision Support', 'Clinical Documentation AI', 'Operational and Administrative Automation', 'Education and Training AI', 'Research and Clinical Trial AI', 'Robotics and Surgical AI', 'Patient-facing AI', 'Public Health AI']",
    "Category": "Academic Institution",
    "predicted_specialty": "surgery, radiology, infectious_diseases",
    "Year": 2024,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.himss.org/sites/hde/files/media/file/2021/09/28/stateofhealthcareppt_emc_sofo_070821-final.pdf",
    "AI Applications": "['Robotics and Surgical AI']",
    "Category": "Professional Medical Organization",
    "predicted_specialty": "infectious_diseases",
    "Year": "",
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Safety and Risk Management",
    "State": ""
  },
  {
    "URL": "https://centralsouthernohio.himss.org/sites/hde/files/2023-12/1c-ai-in-healthcare-hope-vs-hype-csohimss-27-sept-2019.pdf",
    "AI Applications": "['Medical Imaging AI', 'Predictive Analytics', 'Patient-facing AI']",
    "Category": "Professional Medical Organization",
    "predicted_specialty": "unclassified",
    "Year": 2021,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Transparency and Explainability",
    "State": ""
  },
  {
    "URL": "https://www.aha.org/system/files/media/file/2025/01/aha-comments-on-cms-medicare-advantage-part-d-proposed-rule-for-contract-year-2026-letter-1-27-2024.pdf",
    "AI Applications": [],
    "Category": "Professional Medical Organization",
    "predicted_specialty": "unclassified",
    "Year": 2025,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.aha.org/system/files/media/file/2020/12/aha-member-value-2020_V2.pdf",
    "AI Applications": [],
    "Category": "Professional Medical Organization",
    "predicted_specialty": "infectious_diseases",
    "Year": 2020,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.nlm.nih.gov/od/bor/February_2024_BOR_Final_Minutes_Accessible.pdf",
    "AI Applications": [],
    "Category": "Federal",
    "predicted_specialty": "unclassified",
    "Year": 2024,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.1319.pdf",
    "AI Applications": [],
    "Category": "Federal",
    "predicted_specialty": "unclassified",
    "Year": 2024,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://ahca.myflorida.com/content/download/25608/file/10819.pdf",
    "AI Applications": [],
    "Category": "Professional Medical Organization",
    "predicted_specialty": "oncology, cardiology, pulmonology, neurology",
    "Year": 2024,
    "Focus Areas": "Reliability and Performance, Privacy and Security, Safety and Risk Management, Governance Committees",
    "State": "Florida"
  },
  {
    "URL": "https://zenodo.org/records/7217975/files/HHAI%20Paper%202022.pdf",
    "AI Applications": "['Operational and Administrative Automation', 'Patient-facing AI', 'Education and Training AI', 'Medical Imaging AI']",
    "Category": "Academic Institution",
    "predicted_specialty": "radiology",
    "Year": 2022,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://data.aclum.org/storage/2025/01/NIST_www_nist_gov_system_files_documents_2019_08_10_ai_standards_fedengagement_plan_9aug2019.pdf",
    "AI Applications": [],
    "Category": "Academic Institution",
    "predicted_specialty": "unclassified",
    "Year": 2019,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "http://large.stanford.edu/courses/2018/ph241/cheng1/docs/ai-eop-oct16.pdf",
    "AI Applications": "['Education and Training AI', 'Clinical Decision Support', 'Research and Clinical Trial AI', 'Public Health AI']",
    "Category": "Academic Institution",
    "predicted_specialty": "neurology",
    "Year": 2016,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://prevencionulcerasyheridas.com/wp-content/uploads/2023/10/Post1_1.pdf",
    "AI Applications": [],
    "Category": "Nonprofit",
    "predicted_specialty": "surgery, psychiatry, pediatrics, infectious_diseases",
    "Year": 2021,
    "Focus Areas": "Bias and Fairness, Privacy and Security, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.cureus.com/articles/304959-the-potential-of-artificial-intelligence-in-unveiling-healthcares-future.pdf",
    "AI Applications": "['Patient-facing AI', 'Robotics and Surgical AI', 'Education and Training AI', 'Research and Clinical Trial AI', 'Medical Imaging AI', 'Public Health AI', 'Operational and Administrative Automation', 'Clinical Documentation AI', 'Predictive Analytics', 'Clinical Decision Support']",
    "Category": "Professional Medical Organization",
    "predicted_specialty": "Obstetrics_Gynecology, oncology, radiology, cardiology, neurology, infectious_diseases",
    "Year": 2024,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://aspe.hhs.gov/sites/default/files/documents/fc24e0441e29b1c010b0b9713cff8b2d/PTAC-TCOC-Escan-Suppl-Vol2.pdf",
    "AI Applications": [],
    "Category": "Federal",
    "predicted_specialty": "oncology, cardiology, nephrology, ophthalmology, neurology",
    "Year": 2022,
    "Focus Areas": "Reliability and Performance, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.healthit.gov/sites/default/files/2024-09/Valerie%20DeMarchi.pdf",
    "AI Applications": [],
    "Category": "Federal",
    "predicted_specialty": "unclassified",
    "Year": 2024,
    "Focus Areas": "Bias and Fairness, Privacy and Security, Ethics and Consent, Safety and Risk Management",
    "State": ""
  },
  {
    "URL": "https://www.in.gov/fssa/files/IN_HIP_SMI_Amendment_Approval_12-20-2019.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "Obstetrics_Gynecology, gastroenterology, psychiatry, neurology, infectious_diseases",
    "Year": 2019,
    "Focus Areas": "Reliability and Performance, Privacy and Security, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": "Indiana"
  },
  {
    "URL": "https://nationalfairhousing.org/wp-content/uploads/2025/03/NFHA_RFI-on-AI-Action-Plan_03-15-2024-1.pdf",
    "AI Applications": [],
    "Category": "Nonprofit",
    "predicted_specialty": "unclassified",
    "Year": 2025,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://pdfs.semanticscholar.org/2702/652bb897688f27c582445ef199d9008941c9.pdf",
    "AI Applications": [],
    "Category": "Academic Institution",
    "predicted_specialty": "unclassified",
    "Year": 2024,
    "Focus Areas": "Bias and Fairness, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://law.yale.edu/sites/default/files/area/center/mfia/document/infopack.pdf",
    "AI Applications": [],
    "Category": "Academic Institution",
    "predicted_specialty": "unclassified",
    "Year": "",
    "Focus Areas": "Bias and Fairness, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://billtexts.s3.amazonaws.com/ca/ca-analysishttps-leginfo-legislature-ca-gov-faces-billAnalysisClient-xhtml-bill-id-202520260AB1018-ca-analysis-384363.pdf",
    "AI Applications": [],
    "Category": "Academic Institution",
    "predicted_specialty": "unclassified",
    "Year": 2025,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://journalwjarr.com/sites/default/files/fulltext_pdf/WJARR-2025-0192.pdf",
    "AI Applications": [],
    "Category": "Academic Institution",
    "predicted_specialty": "unclassified",
    "Year": 2025,
    "Focus Areas": "Bias and Fairness, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.gjmedph.com/Uploads/O9_Vol14_No2_2025.pdf",
    "AI Applications": "['Public Health AI']",
    "Category": "Professional Medical Organization",
    "predicted_specialty": "unclassified",
    "Year": 2025,
    "Focus Areas": "Bias and Fairness, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://braininitiative.nih.gov/sites/default/files/documents/2024%20NIH%20BRAIN%20NeuroAI%20Workshop%20Final%20Program%20Book_508c%201.pdf",
    "AI Applications": [],
    "Category": "Federal",
    "predicted_specialty": "neurology",
    "Year": 2024,
    "Focus Areas": "Reliability and Performance, Privacy and Security, Transparency and Explainability, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.ninds.nih.gov/sites/default/files/documents/ADRD%20Summit%202022%20Report%20to%20NINDS%20Council%20FINAL_508C.pdf",
    "AI Applications": [],
    "Category": "Federal",
    "predicted_specialty": "radiology, cardiology, pathology, psychiatry, neurology",
    "Year": 2022,
    "Focus Areas": "Reliability and Performance, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://assets.pubpub.org/brk3kbtb/61624389321726.pdf",
    "AI Applications": [],
    "Category": "Academic Institution",
    "predicted_specialty": "unclassified",
    "Year": "",
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://knowledge.uchicago.edu/record/7438/files/Toward-fairness-in-artificial-intelligence-for-medical-image-analysis.pdf",
    "AI Applications": "['Medical Imaging AI']",
    "Category": "Academic Institution",
    "predicted_specialty": "radiology, infectious_diseases",
    "Year": 2023,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Transparency and Explainability, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "http://www.matjazperc.com/publications/JEconCultSoc_69_159.pdf",
    "AI Applications": "['Education and Training AI']",
    "Category": "Academic Institution",
    "predicted_specialty": "unclassified",
    "Year": 2023,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://ai-forum.com/wp-content/uploads/Understanding-Bias-in-Facial-Recognition-Technologies.pdf",
    "AI Applications": [],
    "Category": "Professional Medical Organization",
    "predicted_specialty": "unclassified",
    "Year": 2018,
    "Focus Areas": "Bias and Fairness, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://afutureworththinkingabout.com/wp-content/uploads/2024/01/Bias-Optimizers-PREPRINT.pdf",
    "AI Applications": [],
    "Category": "Professional Medical Organization",
    "predicted_specialty": "unclassified",
    "Year": 2023,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://journalofethics.ama-assn.org/sites/journalofethics.ama-assn.org/files/2018-06/vm-1410.pdf",
    "AI Applications": [],
    "Category": "Professional Medical Organization",
    "predicted_specialty": "surgery, Obstetrics_Gynecology, oncology, endocrinology, pediatrics, infectious_diseases",
    "Year": 2014,
    "Focus Areas": "Reliability and Performance, Privacy and Security, Safety and Risk Management",
    "State": ""
  },
  {
    "URL": "https://aspe.hhs.gov/sites/default/files/private/pdf/259016/ONCPROFinalReportFinal.pdf",
    "AI Applications": "['Clinical Decision Support']",
    "Category": "Federal",
    "predicted_specialty": "unclassified",
    "Year": 2019,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Transparency and Explainability, Ethics and Consent, Safety and Risk Management",
    "State": ""
  },
  {
    "URL": "https://nppes.cms.hhs.gov/IAWebContent/FAQs.pdf",
    "AI Applications": [],
    "Category": "Federal",
    "predicted_specialty": "unclassified",
    "Year": 2025,
    "Focus Areas": "Reliability and Performance, Privacy and Security, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://cms.hhs.gov/Regulations-and-Guidance/Legislation/EHRIncentivePrograms/Downloads/EHR_Medicare_Stg1_BegGuide.pdf",
    "AI Applications": [],
    "Category": "Federal",
    "predicted_specialty": "unclassified",
    "Year": 2014,
    "Focus Areas": "Reliability and Performance",
    "State": ""
  },
  {
    "URL": "https://www.healthit.gov/sites/default/files/page/2020-03/ONCPROFinalReportFinal.pdf",
    "AI Applications": "['Clinical Decision Support']",
    "Category": "Federal",
    "predicted_specialty": "unclassified",
    "Year": 2019,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Transparency and Explainability, Ethics and Consent, Safety and Risk Management",
    "State": ""
  },
  {
    "URL": "https://www.healthit.gov/sites/default/files/page/2018-03/Population%20Level%20Data%20Export%20Meeting%20Summary%20Report_0.pdf",
    "AI Applications": "['Public Health AI']",
    "Category": "Federal",
    "predicted_specialty": "unclassified",
    "Year": 2017,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Transparency and Explainability, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://seed.nih.gov/sites/default/files/2023-09/Device-Reimbursement-Case-Study-2.pdf",
    "AI Applications": "['Patient-facing AI', 'Robotics and Surgical AI']",
    "Category": "Federal",
    "predicted_specialty": "cardiology",
    "Year": 2022,
    "Focus Areas": "Reliability and Performance, Safety and Risk Management",
    "State": ""
  },
  {
    "URL": "https://www.nlm.nih.gov/od/bor/Sep_2022_BOR_Final_Minutes_Accessible.pdf",
    "AI Applications": [],
    "Category": "Federal",
    "predicted_specialty": "unclassified",
    "Year": 2022,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://nvlpubs.nist.gov/nistpubs/ir/2023/NIST.IR.8432.pdf",
    "AI Applications": [],
    "Category": "Federal",
    "predicted_specialty": "pathology",
    "Year": 2023,
    "Focus Areas": "Bias and Fairness, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.cms.gov/regulations-and-guidance/legislation/ehrincentiveprograms/downloads/ehr_medicare_stg1_begguide.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "unclassified",
    "Year": 2014,
    "Focus Areas": "Reliability and Performance",
    "State": ""
  },
  {
    "URL": "https://portal.ct.gov/-/media/OHS/Health-IT-Advisory-Council/Agendas/2021-2024-Meetings/2-15-24/OHS_HITAC_Meeting_Presentation_02-15-2024.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "unclassified",
    "Year": 2024,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Safety and Risk Management, Governance Committees",
    "State": "Connecticut"
  },
  {
    "URL": "https://finance.ky.gov/eProcurement/MolinaResponse/I.C.21%20Pharmacy%20Benefits.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "unclassified",
    "Year": 2020,
    "Focus Areas": "Reliability and Performance, Privacy and Security, Safety and Risk Management, Governance Committees",
    "State": "Kentucky"
  },
  {
    "URL": "https://www.health.ny.gov/health_care/managed_care/appextension/docs/2024-01-09_ny_stc.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "Obstetrics_Gynecology, psychiatry",
    "Year": 2024,
    "Focus Areas": "Reliability and Performance, Privacy and Security, Safety and Risk Management, Governance Committees",
    "State": "New York"
  },
  {
    "URL": "https://health.ny.gov/health_care/medicaid/ebbrac/meetings/2024/docs/policy_brief_rpt.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "endocrinology, psychiatry",
    "Year": 2024,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Safety and Risk Management, Governance Committees",
    "State": "New York"
  },
  {
    "URL": "https://www.oregon.gov/oha/HPA/OHIT/Documents/HealthShare2024HealthITRoadmap.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "pediatrics",
    "Year": 2024,
    "Focus Areas": "Reliability and Performance, Privacy and Security, Safety and Risk Management",
    "State": "Oregon"
  },
  {
    "URL": "https://www.urac.org/wp-content/uploads/2021/02/DubaiTelehealthRequirementsv2-022021.pdf",
    "AI Applications": [],
    "Category": "Professional Medical Organization",
    "predicted_specialty": "unclassified",
    "Year": 2020,
    "Focus Areas": "Reliability and Performance, Privacy and Security, Ethics and Consent, Safety and Risk Management",
    "State": ""
  },
  {
    "URL": "https://hcttf.org/wp-content/uploads/2025/06/HCTTF-Recommendations-on-the-CMS-Health-Tech-Ecosystems-RFI_consolidated-feedback.pdf",
    "AI Applications": [],
    "Category": "Professional Medical Organization",
    "predicted_specialty": "unclassified",
    "Year": 2025,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Safety and Risk Management",
    "State": ""
  },
  {
    "URL": "https://www.iderha.org/sites/iderha/files/2024-05/D6.2%20Report%20on%20Global%20Regulatory%20Best%20Practices%20Analysis_v2.0.pdf",
    "AI Applications": "['Research and Clinical Trial AI', 'Predictive Analytics']",
    "Category": "Academic Institution",
    "predicted_specialty": "unclassified",
    "Year": 2024,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.aub.edu/fm/CaMOP/Documents/Mobile-Devices-Health.pdf",
    "AI Applications": "['Patient-facing AI', 'Public Health AI']",
    "Category": "Academic Institution",
    "predicted_specialty": "neurology",
    "Year": 2019,
    "Focus Areas": "Reliability and Performance, Ethics and Consent, Safety and Risk Management",
    "State": ""
  },
  {
    "URL": "https://www.apple.com/healthcare/docs/products-platform/Deploying_iPhone_for_Clinical_Communication_and_Nursing_Care.pdf",
    "AI Applications": [],
    "Category": "Professional Medical Organization",
    "predicted_specialty": "unclassified",
    "Year": 2024,
    "Focus Areas": "Reliability and Performance, Privacy and Security, Safety and Risk Management",
    "State": ""
  },
  {
    "URL": "https://ijetrm.com/issues/files/Apr-2024-11-1744382302-AUG202428.pdf",
    "AI Applications": "['Public Health AI', 'Operational and Administrative Automation']",
    "Category": "Professional Medical Organization",
    "predicted_specialty": "psychiatry",
    "Year": 2024,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://houstonhealthlaw.scholasticahq.com/article/128623.pdf",
    "AI Applications": "['Patient-facing AI', 'Clinical Documentation AI', 'Medical Imaging AI', 'Operational and Administrative Automation']",
    "Category": "Professional Medical Organization",
    "predicted_specialty": "psychiatry",
    "Year": 2023,
    "Focus Areas": "Bias and Fairness, Privacy and Security, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.indjcst.com/archiver/archives/encrypted_cloud_based_health_appointment_system_using_ai.pdf",
    "AI Applications": "['Clinical Documentation AI', 'Operational and Administrative Automation', 'Patient-facing AI']",
    "Category": "Academic Institution",
    "predicted_specialty": "unclassified",
    "Year": 2025,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management",
    "State": ""
  },
  {
    "URL": "https://www.ama-assn.org/system/files/2018-11/a18-status-report.pdf",
    "AI Applications": [],
    "Category": "Professional Medical Organization",
    "predicted_specialty": "Obstetrics_Gynecology",
    "Year": 2018,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://osp.od.nih.gov/wp-content/uploads/Public_Comments_Data_Managment_Sharing_Citation.pdf",
    "AI Applications": [],
    "Category": "Federal",
    "predicted_specialty": "oncology, radiology, cardiology, pathology, psychiatry, neurology, infectious_diseases",
    "Year": 2016,
    "Focus Areas": "Bias and Fairness, Privacy and Security, Transparency and Explainability, Ethics and Consent, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://aspe.hhs.gov/sites/default/files/documents/6f3d8cbc2bd8bf52c34aa69510d06434/PTAC-TCOC-RTS.pdf",
    "AI Applications": [],
    "Category": "Federal",
    "predicted_specialty": "oncology",
    "Year": 2016,
    "Focus Areas": "Reliability and Performance, Privacy and Security, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.healthit.gov/sites/default/files/facas/2018-10-17_NCVHS%20Predictability%20Roadmap%20Narrative%20Report%20September%202018_508.pdf",
    "AI Applications": [],
    "Category": "Federal",
    "predicted_specialty": "unclassified",
    "Year": 2018,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://mmshub.cms.gov/sites/default/files/June-2024-TEP-ACP-Summary-Report.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "psychiatry",
    "Year": 2024,
    "Focus Areas": "Reliability and Performance, Privacy and Security, Ethics and Consent, Safety and Risk Management",
    "State": ""
  },
  {
    "URL": "https://ciapm.chhs.ca.gov/docs/reports/20190826-Evaluations_Report_on_CIAPM_Projects_2015-2018_ADA.pdf",
    "AI Applications": "['Medical Imaging AI', 'Education and Training AI', 'Research and Clinical Trial AI']",
    "Category": "State",
    "predicted_specialty": "oncology, radiology, cardiology, pathology, rheumatology, psychiatry, pediatrics, neurology, infectious_diseases",
    "Year": 2015,
    "Focus Areas": "Reliability and Performance, Transparency and Explainability, Safety and Risk Management",
    "State": "California"
  },
  {
    "URL": "https://coi.isc.idaho.gov/docs/ISC-52636-2025/2025/013025-Declaration-Anne-Haws.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "Obstetrics_Gynecology, psychiatry",
    "Year": 2025,
    "Focus Areas": "Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": "Idaho"
  },
  {
    "URL": "https://aspe.hhs.gov/sites/default/files/2021-07/covid-pcor-report.pdf",
    "AI Applications": "['Research and Clinical Trial AI', 'Patient-facing AI', 'Public Health AI']",
    "Category": "Federal",
    "predicted_specialty": "infectious_diseases",
    "Year": 2021,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Transparency and Explainability",
    "State": ""
  },
  {
    "URL": "https://aspe.hhs.gov/sites/default/files/private/pdf/259016/PCOR-Data-Infrastructure.pdf",
    "AI Applications": [],
    "Category": "Federal",
    "predicted_specialty": "unclassified",
    "Year": 2020,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Transparency and Explainability, Safety and Risk Management",
    "State": ""
  },
  {
    "URL": "https://edrn.nci.nih.gov/documents/1383/03-EDRN_--_FL_--_Oral_Presentation.pdf",
    "AI Applications": [],
    "Category": "Federal",
    "predicted_specialty": "oncology",
    "Year": 2024,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Transparency and Explainability, Safety and Risk Management",
    "State": ""
  },
  {
    "URL": "https://edrn.nci.nih.gov/documents/1331/EDRN_Federated_Learning.pdf",
    "AI Applications": [],
    "Category": "Federal",
    "predicted_specialty": "unclassified",
    "Year": "",
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Transparency and Explainability, Ethics and Consent, Safety and Risk Management",
    "State": ""
  },
  {
    "URL": "https://www.nhlbi.nih.gov/sites/default/files/media/docs/NOITP_Data_Rep_MHP_FINAL_4-19-21.pdf",
    "AI Applications": [],
    "Category": "Federal",
    "predicted_specialty": "infectious_diseases",
    "Year": 2021,
    "Focus Areas": "Bias and Fairness, Ethics and Consent, Safety and Risk Management",
    "State": ""
  },
  {
    "URL": "https://csrc.nist.gov/csrc/media/presentations/2024/wpec2024-2a4/images-media/wpec2024-2a4-slides-james--NSF-PDaSP.pdf",
    "AI Applications": [],
    "Category": "Federal",
    "predicted_specialty": "unclassified",
    "Year": 2022,
    "Focus Areas": "Bias and Fairness, Privacy and Security, Ethics and Consent, Safety and Risk Management",
    "State": ""
  },
  {
    "URL": "https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.1268.pdf",
    "AI Applications": "['Public Health AI']",
    "Category": "Federal",
    "predicted_specialty": "infectious_diseases",
    "Year": 2021,
    "Focus Areas": "Bias and Fairness, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management",
    "State": ""
  },
  {
    "URL": "https://cppa.ca.gov/meetings/materials/20240308_item4_draft_risk.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "unclassified",
    "Year": 2024,
    "Focus Areas": "Bias and Fairness, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": "California"
  },
  {
    "URL": "https://cppa.ca.gov/regulations/pdf/rm1_late_comments.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "unclassified",
    "Year": 2022,
    "Focus Areas": "Bias and Fairness, Privacy and Security, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": "California"
  },
  {
    "URL": "https://cppa.ca.gov/regulations/pdf/preliminary_drop_public_comments.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "unclassified",
    "Year": 2024,
    "Focus Areas": "Bias and Fairness, Privacy and Security, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": "California"
  },
  {
    "URL": "https://apcp.assembly.ca.gov/system/files/2025-05/5.27-background-paper-final_0.pdf",
    "AI Applications": "['Predictive Analytics']",
    "Category": "State",
    "predicted_specialty": "unclassified",
    "Year": 2025,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": "California"
  },
  {
    "URL": "https://cppa.ca.gov/meetings/materials/20250501_item4_draft_text.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "unclassified",
    "Year": 2025,
    "Focus Areas": "Privacy and Security, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": "California"
  },
  {
    "URL": "https://www.itm-conferences.org/articles/itmconf/pdf/2025/07/itmconf_icsice2025_04002.pdf",
    "AI Applications": [],
    "Category": "Academic Institution",
    "predicted_specialty": "unclassified",
    "Year": 2025,
    "Focus Areas": "Bias and Fairness, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.medrxiv.org/content/10.1101/2023.02.19.22279631v1.full.pdf",
    "AI Applications": "['Medical Imaging AI']",
    "Category": "Professional Medical Organization",
    "predicted_specialty": "radiology, pulmonology, infectious_diseases",
    "Year": 2023,
    "Focus Areas": "Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://ijctjournal.org/wp-content/uploads/2025/04/Federated_Learning_with_Transformers__Privacy_Preserving_AI_at_Scale.pdf",
    "AI Applications": [],
    "Category": "Academic Institution",
    "predicted_specialty": "unclassified",
    "Year": "",
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "http://www.jatit.org/volumes/Vol102No9/15Vol102No9.pdf",
    "AI Applications": [],
    "Category": "Academic Institution",
    "predicted_specialty": "unclassified",
    "Year": 2024,
    "Focus Areas": "Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://urfjournals.org/open-access/multi-brain-federated-learning-for-decentralized-ai-collaborative-privacy-preserving-models-across-domains.pdf",
    "AI Applications": [],
    "Category": "Academic Institution",
    "predicted_specialty": "neurology",
    "Year": 2023,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://ceur-ws.org/Vol-2573/PrivateNLP_InvitedTalk1.pdf",
    "AI Applications": [],
    "Category": "Academic Institution",
    "predicted_specialty": "unclassified",
    "Year": 2020,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "http://sis.eng.usf.edu/Papers/radiology25.pdf",
    "AI Applications": "['Medical Imaging AI']",
    "Category": "Professional Medical Organization",
    "predicted_specialty": "radiology",
    "Year": "",
    "Focus Areas": "Reliability and Performance, Transparency and Explainability, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://ebiquity.umbc.edu/get/a/publication/1438.pdf",
    "AI Applications": [],
    "Category": "Academic Institution",
    "predicted_specialty": "endocrinology",
    "Year": 2025,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.ccs.uky.edu/wp-content/uploads/2025/01/20241121-CohenArchboldAndUsmanHassan-PrivateMachineLearning.pdf",
    "AI Applications": [],
    "Category": "Professional Medical Organization",
    "predicted_specialty": "unclassified",
    "Year": 2020,
    "Focus Areas": "Bias and Fairness, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://dpo-india.com/Resources/Global_Privacy_Control/national_strategy_to_advance_privacy_preserving_data_sharing_and_analytics.pdf",
    "AI Applications": [],
    "Category": "Academic Institution",
    "predicted_specialty": "unclassified",
    "Year": 2023,
    "Focus Areas": "Bias and Fairness, Privacy and Security, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.nature.com/articles/s41598-025-97565-4.pdf",
    "AI Applications": "['Medical Imaging AI', 'Patient-facing AI', 'Education and Training AI', 'Research and Clinical Trial AI', 'Public Health AI']",
    "Category": "Academic Institution",
    "predicted_specialty": "oncology, radiology, pathology, endocrinology, ophthalmology, neurology, infectious_diseases",
    "Year": 2025,
    "Focus Areas": "Reliability and Performance, Transparency and Explainability, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.informationpolicycentre.com/uploads/5/7/1/0/57104281/cipl_pets_and_ppts_in_ai_mar25.pdf",
    "AI Applications": [],
    "Category": "Academic Institution",
    "predicted_specialty": "unclassified",
    "Year": 2025,
    "Focus Areas": "Bias and Fairness, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://journalwjarr.com/sites/default/files/fulltext_pdf/WJARR-2025-1099.pdf",
    "AI Applications": [],
    "Category": "Academic Institution",
    "predicted_specialty": "unclassified",
    "Year": 2025,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.informationpolicycentre.com/uploads/5/7/1/0/57104281/cipl-understanding-pets-and-ppts-dec2023.pdf",
    "AI Applications": [],
    "Category": "Academic Institution",
    "predicted_specialty": "unclassified",
    "Year": 2023,
    "Focus Areas": "Bias and Fairness, Privacy and Security, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.thieme-connect.com/products/ejournals/pdf/10.1055/s-0041-1740630.pdf",
    "AI Applications": "['Research and Clinical Trial AI', 'Medical Imaging AI']",
    "Category": "Academic Institution",
    "predicted_specialty": "oncology, radiology",
    "Year": 2022,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://ijrpr.com/uploads/V6ISSUE3/IJRPR41146.pdf",
    "AI Applications": [],
    "Category": "Academic Institution",
    "predicted_specialty": "unclassified",
    "Year": 2025,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://ijarasem.com/admin/img/32_Federated.pdf",
    "AI Applications": "['Research and Clinical Trial AI']",
    "Category": "Professional Medical Organization",
    "predicted_specialty": "unclassified",
    "Year": 2023,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://terra-docs.s3.us-east-2.amazonaws.com/IJHSR/Articles/volume5-issue1/2023_51_p99_Nam.pdf",
    "AI Applications": "['Medical Imaging AI']",
    "Category": "Academic Institution",
    "predicted_specialty": "oncology, dermatology",
    "Year": 2023,
    "Focus Areas": "Reliability and Performance, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://journalwjarr.com/sites/default/files/fulltext_pdf/WJARR-2025-0268.pdf",
    "AI Applications": [],
    "Category": "Academic Institution",
    "predicted_specialty": "unclassified",
    "Year": 2025,
    "Focus Areas": "Bias and Fairness, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.healthit.gov/sites/default/files/10-30-ucsd-dbmi-onc-blockchain-challenge.pdf",
    "AI Applications": [],
    "Category": "Federal",
    "predicted_specialty": "unclassified",
    "Year": "",
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://sciendo.com/2/v2/download/article/10.2478/ias-2024-0017.pdf",
    "AI Applications": [],
    "Category": "Academic Institution",
    "predicted_specialty": "unclassified",
    "Year": 2024,
    "Focus Areas": "Bias and Fairness, Privacy and Security, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.healthit.gov/sites/default/files/page/2022-10/Priorities%20to%20Accelerate%20Workflow%20Automation-508-1022.pdf",
    "AI Applications": "['Operational and Administrative Automation']",
    "Category": "Federal",
    "predicted_specialty": "unclassified",
    "Year": 2022,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.cms.gov/files/document/reimagining-rural-health-strategy.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "unclassified",
    "Year": 2024,
    "Focus Areas": "Reliability and Performance, Privacy and Security, Safety and Risk Management",
    "State": ""
  },
  {
    "URL": "https://cim.legislature.ohio.gov/assets/organizations/commission-on-infant-mortality/files/riskld-driving-better-outcomes-and-reduced-racial-disparities-in-pregnancy.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "Obstetrics_Gynecology",
    "Year": 2009,
    "Focus Areas": "Reliability and Performance, Safety and Risk Management",
    "State": "Ohio"
  },
  {
    "URL": "https://www.pa.gov/content/dam/copapwp-pagov/en/dhs/documents/ehealth/documents/pa-ehealth-advisory-board-meeting-slides_8-2-2024.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "unclassified",
    "Year": 2024,
    "Focus Areas": "Reliability and Performance, Privacy and Security, Safety and Risk Management",
    "State": "Pennsylvania"
  },
  {
    "URL": "https://www3.weforum.org/docs/WEF_Scaling_Smart_Solutions_with_AI_in_Health_Unlocking_Impact_on_High_Potential_Use_Cases.pdf",
    "AI Applications": "['Public Health AI', 'Research and Clinical Trial AI', 'Operational and Administrative Automation', 'Patient-facing AI', 'Education and Training AI', 'Medical Imaging AI', 'Robotics and Surgical AI', 'Predictive Analytics', 'Clinical Documentation AI']",
    "Category": "Professional Medical Organization",
    "predicted_specialty": "cardiology, infectious_diseases",
    "Year": 2023,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.broadbandcommission.org/Documents/working-groups/AIinHealth_Report.pdf",
    "AI Applications": "['Public Health AI', 'Robotics and Surgical AI', 'Education and Training AI', 'Patient-facing AI', 'Research and Clinical Trial AI', 'Operational and Administrative Automation', 'Clinical Decision Support', 'Medical Imaging AI', 'Predictive Analytics', 'Clinical Documentation AI']",
    "Category": "Academic Institution",
    "predicted_specialty": "surgery, oncology, radiology, cardiology, endocrinology, pulmonology, neurology, infectious_diseases",
    "Year": 2020,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.ijmsm.org/volume2-issue1/IJMSM-V2I1P106.pdf",
    "AI Applications": [],
    "Category": "Professional Medical Organization",
    "predicted_specialty": "unclassified",
    "Year": 2025,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://interscity.org/assets/iyda_iotjournal21.pdf",
    "AI Applications": "['Public Health AI', 'Predictive Analytics']",
    "Category": "Academic Institution",
    "predicted_specialty": "infectious_diseases",
    "Year": 2021,
    "Focus Areas": "Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management",
    "State": ""
  },
  {
    "URL": "https://www.uth.edu/it/review/uthealth-houston-it-review-2025.pdf",
    "AI Applications": "['Clinical Decision Support']",
    "Category": "Professional Medical Organization",
    "predicted_specialty": "unclassified",
    "Year": 2025,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management",
    "State": ""
  },
  {
    "URL": "https://cesr.usc.edu/documents/WP_2015_008.pdf",
    "AI Applications": [],
    "Category": "Academic Institution",
    "predicted_specialty": "unclassified",
    "Year": 2015,
    "Focus Areas": "Reliability and Performance, Privacy and Security, Transparency and Explainability, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://billtexts.s3.amazonaws.com/ca/ca-analysishttps-leginfo-legislature-ca-gov-faces-billAnalysisClient-xhtml-bill-id-202520260SB813-ca-analysis-385349.pdf",
    "AI Applications": [],
    "Category": "Professional Medical Organization",
    "predicted_specialty": "unclassified",
    "Year": 2025,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://hpn-usa.com/wp-content/uploads/2024/09/HPN-USA-Guide-2024-Final.pdf",
    "AI Applications": "['Clinical Documentation AI', 'Operational and Administrative Automation']",
    "Category": "Nonprofit",
    "predicted_specialty": "unclassified",
    "Year": 2024,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security",
    "State": ""
  },
  {
    "URL": "https://digitalhealthcanada.com/wp-content/uploads/2025/05/Setting-the-Winning-Conditions-for-AI-powered-Healthcare-CHIEF-ONLY.pdf",
    "AI Applications": "['Operational and Administrative Automation', 'Public Health AI', 'Clinical Documentation AI', 'Education and Training AI']",
    "Category": "Professional Medical Organization",
    "predicted_specialty": "radiology, infectious_diseases",
    "Year": 2025,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.brainomix.com/media/05ljuidq/deployment-of-ai_nhs_glip_2024.pdf",
    "AI Applications": "['Operational and Administrative Automation', 'Education and Training AI', 'Clinical Decision Support', 'Clinical Documentation AI', 'Medical Imaging AI', 'Research and Clinical Trial AI', 'Public Health AI', 'Patient-facing AI']",
    "Category": "Professional Medical Organization",
    "predicted_specialty": "radiology",
    "Year": 2024,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Transparency and Explainability, Ethics and Consent, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.aha.org/system/files/media/file/2022/02/aha-strategic-plan-2022%E2%80%932024.pdf",
    "AI Applications": [],
    "Category": "Professional Medical Organization",
    "predicted_specialty": "unclassified",
    "Year": 2022,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://finance.ky.gov/eProcurement/HumanaResponse/164_I_C_26_Program%20Integrity_PROPRIETARY.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "unclassified",
    "Year": "",
    "Focus Areas": "Reliability and Performance, Privacy and Security, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": "Kentucky"
  },
  {
    "URL": "https://sitic.org/wordpress/wp-content/uploads/The-rise-of-digital-health-technologies-during-the-pandemic.pdf",
    "AI Applications": "['Public Health AI', 'Patient-facing AI', 'Medical Imaging AI']",
    "Category": "Professional Medical Organization",
    "predicted_specialty": "infectious_diseases",
    "Year": 2020,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management",
    "State": ""
  },
  {
    "URL": "https://globaldataalliance.org/wp-content/uploads/2024/10/10162024gdaabdhealthdata.pdf",
    "AI Applications": "['Research and Clinical Trial AI', 'Patient-facing AI']",
    "Category": "Professional Medical Organization",
    "predicted_specialty": "unclassified",
    "Year": "",
    "Focus Areas": "Bias and Fairness, Privacy and Security, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://pdfs.semanticscholar.org/137a/56671b465928b43c402555fc6e5412bf3d78.pdf",
    "AI Applications": "['Patient-facing AI', 'Medical Imaging AI', 'Clinical Documentation AI', 'Education and Training AI', 'Clinical Decision Support', 'Robotics and Surgical AI', 'Research and Clinical Trial AI', 'Public Health AI']",
    "Category": "Professional Medical Organization",
    "predicted_specialty": "psychiatry",
    "Year": 2024,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Ethics and Consent, Safety and Risk Management",
    "State": ""
  },
  {
    "URL": "https://futureoflife.org/wp-content/uploads/2024/02/Patrick-Owoche-Role-of-AI-in-Reducing-Maternal-Mortality.pdf",
    "AI Applications": "['Patient-facing AI', 'Public Health AI', 'Medical Imaging AI', 'Clinical Documentation AI', 'Education and Training AI', 'Clinical Decision Support', 'Operational and Administrative Automation', 'Robotics and Surgical AI']",
    "Category": "Academic Institution",
    "predicted_specialty": "surgery, Obstetrics_Gynecology, radiology, pediatrics",
    "Year": "",
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Governance Committees",
    "State": ""
  },
  {
    "URL": "http://www.duke.nus.edu/docs/librariesprovider5/whitepaper/2024_wp001_ai-for-population-health-and-digital-health-in-singapore.pdf",
    "AI Applications": "['Public Health AI', 'Operational and Administrative Automation', 'Patient-facing AI', 'Research and Clinical Trial AI', 'Education and Training AI', 'Predictive Analytics']",
    "Category": "Academic Institution",
    "predicted_specialty": "radiology, psychiatry",
    "Year": 2024,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.hks.harvard.edu/sites/default/files/2024-12/24_Barroso_Digital_v3.pdf",
    "AI Applications": "['Operational and Administrative Automation', 'Patient-facing AI', 'Education and Training AI']",
    "Category": "Academic Institution",
    "predicted_specialty": "neurology",
    "Year": 2024,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://pdf4pro.com/amp/cdn/the-rise-of-digital-health-technologies-during-the-pandemic-787059.pdf",
    "AI Applications": "['Public Health AI', 'Patient-facing AI', 'Medical Imaging AI']",
    "Category": "Academic Institution",
    "predicted_specialty": "infectious_diseases",
    "Year": 2020,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management",
    "State": ""
  },
  {
    "URL": "https://www.uschamber.com/assets/documents/Digitization-Delivers-Japans-Digital-Health-Transformation.pdf",
    "AI Applications": "['Research and Clinical Trial AI']",
    "Category": "Professional Medical Organization",
    "predicted_specialty": "infectious_diseases",
    "Year": 2040,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://sciresjournals.com/ijlsra/sites/default/files/IJLSRA-2024-0040.pdf",
    "AI Applications": "['Patient-facing AI', 'Medical Imaging AI', 'Clinical Documentation AI', 'Education and Training AI', 'Clinical Decision Support', 'Robotics and Surgical AI', 'Research and Clinical Trial AI', 'Public Health AI']",
    "Category": "Academic Institution",
    "predicted_specialty": "psychiatry",
    "Year": 2024,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Ethics and Consent, Safety and Risk Management",
    "State": ""
  },
  {
    "URL": "https://www.lw.com/admin/upload/SiteAttachments/DH24-Chapter-3-Latham-Watkins.pdf",
    "AI Applications": "['Patient-facing AI']",
    "Category": "Professional Medical Organization",
    "predicted_specialty": "unclassified",
    "Year": 2024,
    "Focus Areas": "Bias and Fairness, Privacy and Security, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://assets.cureus.com/uploads/review_article/pdf/321777/20250526-642307-txlcnn.pdf",
    "AI Applications": "['Medical Imaging AI', 'Research and Clinical Trial AI', 'Patient-facing AI', 'Public Health AI', 'Clinical Documentation AI', 'Clinical Decision Support', 'Operational and Administrative Automation', 'Robotics and Surgical AI', 'Education and Training AI']",
    "Category": "Academic Institution",
    "predicted_specialty": "radiology, psychiatry",
    "Year": 2025,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://jkimsu.com/jkimsu-vol12no4/JKIMSU,%20Vol.%2012,%20No.%204,%20October-December%202023%20Page%2015-26.pdf",
    "AI Applications": "['Patient-facing AI', 'Research and Clinical Trial AI', 'Public Health AI', 'Robotics and Surgical AI', 'Operational and Administrative Automation', 'Education and Training AI']",
    "Category": "Academic Institution",
    "predicted_specialty": "unclassified",
    "Year": 2023,
    "Focus Areas": "Bias and Fairness, Privacy and Security, Transparency and Explainability, Ethics and Consent, Governance Committees",
    "State": ""
  },
  {
    "URL": "http://www.naisjournal.com/static/upload/file/20250326/1742973661900248.pdf",
    "AI Applications": "['Research and Clinical Trial AI', 'Medical Imaging AI', 'Robotics and Surgical AI', 'Predictive Analytics', 'Patient-facing AI', 'Public Health AI', 'Operational and Administrative Automation', 'Clinical Decision Support']",
    "Category": "Academic Institution",
    "predicted_specialty": "cardiology, infectious_diseases",
    "Year": 2025,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://ijetrm.com/issues/files/Apr-2025-06-1743915391-APR10.pdf",
    "AI Applications": "['Clinical Documentation AI', 'Operational and Administrative Automation', 'Patient-facing AI', 'Medical Imaging AI', 'Research and Clinical Trial AI', 'Public Health AI', 'Robotics and Surgical AI', 'Clinical Decision Support']",
    "Category": "Academic Institution",
    "predicted_specialty": "surgery, neurology",
    "Year": 2025,
    "Focus Areas": "Bias and Fairness, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://journalofethics.ama-assn.org/sites/joedb/files/2022-04/cscm4-peer-2204_0.pdf",
    "AI Applications": [],
    "Category": "Academic Institution",
    "predicted_specialty": "unclassified",
    "Year": 2022,
    "Focus Areas": "Bias and Fairness, Privacy and Security, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.nichd.nih.gov/sites/default/files/inline-files/PCORTF_Pediatric_Record_Linkage_Governance_Assessment_Formatted120423.pdf",
    "AI Applications": [],
    "Category": "Federal",
    "predicted_specialty": "oncology, psychiatry, pediatrics",
    "Year": "",
    "Focus Areas": "Bias and Fairness, Privacy and Security, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://oag.ca.gov/system/files/attachments/press-docs/NTIA%20AI%20Comment.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "unclassified",
    "Year": 2023,
    "Focus Areas": "Bias and Fairness, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": "California"
  },
  {
    "URL": "https://pdfs.semanticscholar.org/2c59/a4cac7d441e11352dab9d0ad2c360a2d1932.pdf",
    "AI Applications": "['Operational and Administrative Automation', 'Education and Training AI', 'Research and Clinical Trial AI', 'Medical Imaging AI', 'Clinical Decision Support', 'Clinical Documentation AI']",
    "Category": "Professional Medical Organization",
    "predicted_specialty": "unclassified",
    "Year": 2022,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.ijmsm.org/volume2-issue1/IJMSM-V2I1P109.pdf",
    "AI Applications": "['Clinical Decision Support', 'Clinical Documentation AI', 'Medical Imaging AI', 'Operational and Administrative Automation', 'Patient-facing AI', 'Robotics and Surgical AI', 'Education and Training AI', 'Research and Clinical Trial AI', 'Public Health AI', 'Predictive Analytics']",
    "Category": "Professional Medical Organization",
    "predicted_specialty": "unclassified",
    "Year": 2025,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Transparency and Explainability, Ethics and Consent, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://scholar.smu.edu/context/law_faculty/article/1648/viewcontent/21_yale_j.l._tech._special_issue_4.pdf",
    "AI Applications": [],
    "Category": "Academic Institution",
    "predicted_specialty": "unclassified",
    "Year": 2019,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.ijhpm.com/article_4311_584eddc3548d5e96f98db70a506cf809.pdf",
    "AI Applications": "['Operational and Administrative Automation', 'Education and Training AI', 'Research and Clinical Trial AI', 'Medical Imaging AI', 'Clinical Decision Support', 'Clinical Documentation AI']",
    "Category": "Professional Medical Organization",
    "predicted_specialty": "unclassified",
    "Year": 2022,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.lw.com/admin/upload/SiteAttachments/AHLA-Connections-August23-Deixler-Richards-Speros-Beaton.pdf",
    "AI Applications": "['Education and Training AI', 'Clinical Decision Support', 'Predictive Analytics']",
    "Category": "Professional Medical Organization",
    "predicted_specialty": "unclassified",
    "Year": 2023,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://informatics.bmj.com/content/bmjhci/29/1/e100495.full.pdf",
    "AI Applications": "['Research and Clinical Trial AI', 'Education and Training AI']",
    "Category": "Professional Medical Organization",
    "predicted_specialty": "unclassified",
    "Year": 2022,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Transparency and Explainability, Ethics and Consent, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://houstonhealthlaw.scholasticahq.com/api/v1/articles/128626-introducing-a-fairness-checkpoint-for-data-quality-and-evidence-during-regulatory-review-of-ai-ml-enabled-medical-devices.pdf",
    "AI Applications": "['Operational and Administrative Automation', 'Education and Training AI', 'Public Health AI', 'Clinical Documentation AI', 'Medical Imaging AI', 'Predictive Analytics', 'Research and Clinical Trial AI']",
    "Category": "Academic Institution",
    "predicted_specialty": "unclassified",
    "Year": 2025,
    "Focus Areas": "Bias and Fairness, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://asbatlibrary.s3.eu-central-1.amazonaws.com/8a326f50-30d2-4bc5-ae48-83f835fa242f-Lutaaya-CoCIS-BIST.pdf",
    "AI Applications": "['Clinical Decision Support', 'Predictive Analytics']",
    "Category": "Academic Institution",
    "predicted_specialty": "unclassified",
    "Year": 2022,
    "Focus Areas": "Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management",
    "State": ""
  },
  {
    "URL": "https://www.ama-assn.org/sites/ama-assn.org/files/corp/media-browser/public/hod/i17-joint-reports.pdf",
    "AI Applications": [],
    "Category": "Professional Medical Organization",
    "predicted_specialty": "oncology, pathology",
    "Year": 2017,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://cms.hhs.gov/Medicare/Medicare-Fee-for-Service-Payment/Hospice/Downloads/1983-Final-Rule.pdf",
    "AI Applications": [],
    "Category": "Federal",
    "predicted_specialty": "unclassified",
    "Year": 1983,
    "Focus Areas": "Reliability and Performance, Privacy and Security, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.cms.gov/Medicare/Medicare-Fee-for-Service-Payment/Hospice/Downloads/1983-Final-Rule.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "unclassified",
    "Year": 1983,
    "Focus Areas": "Reliability and Performance, Privacy and Security, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.sos.ms.gov/adminsearch/ACCode/00000306c.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "surgery, psychiatry",
    "Year": 1957,
    "Focus Areas": "Reliability and Performance, Privacy and Security, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": "Mississippi"
  },
  {
    "URL": "https://www.oecd.org/content/dam/oecd/en/publications/reports/2024/11/artificial-intelligence-and-the-health-workforce_c8e4433d/9a31d8af-en.pdf",
    "AI Applications": "['Operational and Administrative Automation', 'Education and Training AI', 'Clinical Documentation AI', 'Public Health AI', 'Research and Clinical Trial AI', 'Patient-facing AI', 'Clinical Decision Support', 'Medical Imaging AI', 'Predictive Analytics']",
    "Category": "Professional Medical Organization",
    "predicted_specialty": "oncology, infectious_diseases",
    "Year": 2024,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.feinberg.northwestern.edu/sites/artificial-intelligence/images/20230315legallandscapechatgpt.pdf",
    "AI Applications": [],
    "Category": "Academic Institution",
    "predicted_specialty": "unclassified",
    "Year": 2023,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://tinglongdai.com/wp-content/uploads/Dai-Singh-2021-AI-on-Call.pdf",
    "AI Applications": "['Clinical Decision Support', 'Medical Imaging AI', 'Education and Training AI', 'Research and Clinical Trial AI', 'Robotics and Surgical AI']",
    "Category": "Professional Medical Organization",
    "predicted_specialty": "unclassified",
    "Year": 2021,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.wiggin.com/wp-content/uploads/2024/03/AI-Creates-Liability-Risks-for-Healthcare-Organizations.pdf",
    "AI Applications": "['Clinical Documentation AI', 'Patient-facing AI']",
    "Category": "Professional Medical Organization",
    "predicted_specialty": "surgery",
    "Year": 2024,
    "Focus Areas": "Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.isjtrend.com/article_222910_b610105a9646f2818d9ac73fd7359b6e.pdf",
    "AI Applications": "['Robotics and Surgical AI']",
    "Category": "Academic Institution",
    "predicted_specialty": "surgery",
    "Year": 2025,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.cureus.com/articles/175975-role-of-artificial-intelligence-in-global-surgery-a-review-of-opportunities-and-challenges.pdf",
    "AI Applications": "['Robotics and Surgical AI', 'Education and Training AI', 'Medical Imaging AI', 'Patient-facing AI', 'Operational and Administrative Automation', 'Public Health AI', 'Clinical Documentation AI']",
    "Category": "Professional Medical Organization",
    "predicted_specialty": "surgery",
    "Year": 2023,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.ama-assn.org/system/files/entrepreneurs-webinar-slides.pdf",
    "AI Applications": [],
    "Category": "Professional Medical Organization",
    "predicted_specialty": "unclassified",
    "Year": 2023,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Transparency and Explainability",
    "State": ""
  },
  {
    "URL": "https://ncvhs.hhs.gov/wp-content/uploads/2020/05/Transcript-Full-Committee-Meeting-March-24-2020.pdf",
    "AI Applications": [],
    "Category": "Federal",
    "predicted_specialty": "unclassified",
    "Year": 2020,
    "Focus Areas": "Reliability and Performance, Privacy and Security, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://digirepo.nlm.nih.gov/master/borndig/9918351285606676/9918351285606676.pdf",
    "AI Applications": [],
    "Category": "Federal",
    "predicted_specialty": "unclassified",
    "Year": 2016,
    "Focus Areas": "Reliability and Performance, Privacy and Security, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://pdfs.semanticscholar.org/f962/2816049ffb86bfa05efa96c8020ec68abd79.pdf",
    "AI Applications": [],
    "Category": "Professional Medical Organization",
    "predicted_specialty": "unclassified",
    "Year": 2024,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://csd.columbia.edu/sites/csd.columbia.edu/files/content/docs/ICT%20India/Papers/ICT_India_Working_Paper_25.pdf",
    "AI Applications": [],
    "Category": "Professional Medical Organization",
    "predicted_specialty": "radiology",
    "Year": 2020,
    "Focus Areas": "Bias and Fairness, Privacy and Security, Ethics and Consent, Safety and Risk Management",
    "State": ""
  },
  {
    "URL": "https://www.medidata.com/wp-content/uploads/2023/04/Medical-Device-Regulatory-Landscape_Medidata_White-Paper_202230428.pdf",
    "AI Applications": "['Robotics and Surgical AI']",
    "Category": "Professional Medical Organization",
    "predicted_specialty": "unclassified",
    "Year": 2023,
    "Focus Areas": "Bias and Fairness, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://guideline-ai-healthcare.com/wp-content/uploads/2023/10/InnovationFunnelforValuableAIinHealthcare130122.pdf",
    "AI Applications": [],
    "Category": "Academic Institution",
    "predicted_specialty": "unclassified",
    "Year": "",
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.healthit.gov/sites/default/files/facas/2022-03-10_Kathleen_Blake_Presentation_1.pdf",
    "AI Applications": [],
    "Category": "Federal",
    "predicted_specialty": "unclassified",
    "Year": 2022,
    "Focus Areas": "Bias and Fairness, Transparency and Explainability, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.ninr.nih.gov/sites/default/files/docs/NINR%20AI%20Bootcamp_Final%20Agenda_4-7-2025.pdf",
    "AI Applications": "['Research and Clinical Trial AI', 'Public Health AI']",
    "Category": "Federal",
    "predicted_specialty": "unclassified",
    "Year": 2025,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Transparency and Explainability, Ethics and Consent",
    "State": ""
  },
  {
    "URL": "https://datascience.nih.gov/sites/default/files/users/user516/AI-Supplement-Dr-Danton-Char-Presentation-508.pdf",
    "AI Applications": [],
    "Category": "Federal",
    "predicted_specialty": "unclassified",
    "Year": 2018,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://braininitiative.nih.gov/sites/default/files/documents/NIH-BRAIN-NEWG-meeting-summary-Aug-2024.pdf",
    "AI Applications": [],
    "Category": "Federal",
    "predicted_specialty": "neurology",
    "Year": 2024,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://mmshub.cms.gov/sites/default/files/MMS-Information-Session-AI-in-Quality-Measurement-02282024.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "unclassified",
    "Year": 2024,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.aim-ahead.net/media/cxpplyzx/ai-cares-1-building-a-strong-and-diverse-data-science-community.pdf",
    "AI Applications": [],
    "Category": "Academic Institution",
    "predicted_specialty": "unclassified",
    "Year": 2024,
    "Focus Areas": "Bias and Fairness, Transparency and Explainability",
    "State": ""
  },
  {
    "URL": "https://portal.ct.gov/-/media/OHS/Health-IT-Advisory-Council/Publications/APCD-Related-Publications/APCD-DSG-Public-Comment-Period-2023---OHS-Responses-v2.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "unclassified",
    "Year": 2023,
    "Focus Areas": "Reliability and Performance, Privacy and Security, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": "Connecticut"
  },
  {
    "URL": "https://www.lbo.ms.gov/misc/strategic/FY25/838-00-plan.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "unclassified",
    "Year": 2025,
    "Focus Areas": "Privacy and Security, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": "Mississippi"
  },
  {
    "URL": "https://mrctcenter.org/wp-content/uploads/2025/06/2025-06-24-AI-Review-Framework-Launch-Webinar_FINAL_updated-002.pdf",
    "AI Applications": "['Research and Clinical Trial AI']",
    "Category": "Professional Medical Organization",
    "predicted_specialty": "unclassified",
    "Year": 2025,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://jnm.snmjournals.org/content/jnumed/64/12/1848.full.pdf",
    "AI Applications": [],
    "Category": "Academic Institution",
    "predicted_specialty": "radiology",
    "Year": 2023,
    "Focus Areas": "Bias and Fairness, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://ispe.org/sites/default/files/regulatory/ISPE-Commenting/2024/reflection-paper-use-artificial-intelligence-ai-medicinal-product-lifecycle_en.pdf",
    "AI Applications": "['Research and Clinical Trial AI']",
    "Category": "Professional Medical Organization",
    "predicted_specialty": "unclassified",
    "Year": 2023,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://pdfs.semanticscholar.org/d63d/425965dec88004e8bcb609b4b9dde8ab9738.pdf",
    "AI Applications": "['Research and Clinical Trial AI', 'Patient-facing AI', 'Education and Training AI', 'Robotics and Surgical AI']",
    "Category": "Professional Medical Organization",
    "predicted_specialty": "unclassified",
    "Year": 2023,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.carilionclinic.org/declarationofhelsinkirevisions.pdf",
    "AI Applications": "['Research and Clinical Trial AI']",
    "Category": "Professional Medical Organization",
    "predicted_specialty": "unclassified",
    "Year": 2024,
    "Focus Areas": "Bias and Fairness, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.jclinical.org/articles/clinical-research-and-clinical-trials-an-in-depth-exploration.pdf",
    "AI Applications": "['Research and Clinical Trial AI']",
    "Category": "Academic Institution",
    "predicted_specialty": "unclassified",
    "Year": 2024,
    "Focus Areas": "Reliability and Performance, Privacy and Security, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.ajmb.org/PDF/en/FullText/60605.pdf",
    "AI Applications": [],
    "Category": "Academic Institution",
    "predicted_specialty": "unclassified",
    "Year": 2025,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://rojournals.org/wp-content/uploads/2024/08/ROJPHM-3114-18-2024.pdf",
    "AI Applications": [],
    "Category": "Academic Institution",
    "predicted_specialty": "unclassified",
    "Year": 2024,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.orfonline.org/public/uploads/posts/pdf/20230914110452.pdf",
    "AI Applications": "['Operational and Administrative Automation', 'Public Health AI', 'Patient-facing AI']",
    "Category": "Academic Institution",
    "predicted_specialty": "unclassified",
    "Year": 2019,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://medschool.uci.edu/sites/default/files/2024-06/ethical_considerations_in_implementing_ai_for_mortality_prediction.pdf",
    "AI Applications": "['Clinical Decision Support', 'Clinical Documentation AI', 'Medical Imaging AI', 'Predictive Analytics', 'Patient-facing AI', 'Research and Clinical Trial AI', 'Public Health AI']",
    "Category": "Professional Medical Organization",
    "predicted_specialty": "infectious_diseases",
    "Year": 2023,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.cmu.edu/dietrich/philosophy/docs/london/Alex%20London%20Web%20CV.pdf",
    "AI Applications": [],
    "Category": "Academic Institution",
    "predicted_specialty": "surgery, infectious_diseases",
    "Year": 2023,
    "Focus Areas": "Bias and Fairness, Transparency and Explainability, Ethics and Consent, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://bioethics.jhu.edu/wp-content/uploads/2025/03/PIIS258975002400222X.pdf",
    "AI Applications": [],
    "Category": "Professional Medical Organization",
    "predicted_specialty": "neurology",
    "Year": 2025,
    "Focus Areas": "Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.colorado.edu/research/ai-institute/sites/default/files/attached-files/aframeworkforlanguage.pdf",
    "AI Applications": "['Patient-facing AI']",
    "Category": "Academic Institution",
    "predicted_specialty": "psychiatry, neurology",
    "Year": 2024,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.irejournals.com/formatedpaper/1707645.pdf",
    "AI Applications": "['Research and Clinical Trial AI', 'Clinical Documentation AI']",
    "Category": "Academic Institution",
    "predicted_specialty": "unclassified",
    "Year": 2025,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.cureus.com/articles/259236-ethical-considerations-in-the-use-of-artificial-intelligence-and-machine-learning-in-health-care-a-comprehensive-review.pdf",
    "AI Applications": "['Research and Clinical Trial AI', 'Operational and Administrative Automation', 'Education and Training AI', 'Public Health AI', 'Medical Imaging AI', 'Clinical Decision Support', 'Clinical Documentation AI']",
    "Category": "Academic Institution",
    "predicted_specialty": "unclassified",
    "Year": 2024,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Transparency and Explainability, Ethics and Consent, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://wjarr.com/sites/default/files/WJARR-2024-3675.pdf",
    "AI Applications": "['Clinical Documentation AI', 'Operational and Administrative Automation', 'Patient-facing AI', 'Robotics and Surgical AI', 'Education and Training AI', 'Research and Clinical Trial AI', 'Public Health AI', 'Clinical Decision Support', 'Medical Imaging AI', 'Predictive Analytics']",
    "Category": "Academic Institution",
    "predicted_specialty": "oncology, radiology",
    "Year": 2024,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.novartis.com/sites/novartiscom/files/novartis-responsible-use-of-ai-systems.pdf",
    "AI Applications": "['Research and Clinical Trial AI', 'Patient-facing AI']",
    "Category": "Professional Medical Organization",
    "predicted_specialty": "unclassified",
    "Year": 2018,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.explorationpub.com/uploads/Article/A1002160/1002160.pdf",
    "AI Applications": "['Research and Clinical Trial AI', 'Medical Imaging AI', 'Clinical Decision Support']",
    "Category": "Academic Institution",
    "predicted_specialty": "oncology",
    "Year": 2023,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Transparency and Explainability, Ethics and Consent, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://brieflands.com/articles/jme-140890.pdf",
    "AI Applications": "['Robotics and Surgical AI', 'Education and Training AI', 'Patient-facing AI']",
    "Category": "Academic Institution",
    "predicted_specialty": "unclassified",
    "Year": 2023,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.accp.com/docs/positions/Commentaries/JACCP___JOURNAL_OF_THE_AMERICAN_COLLEGE_OF_CLINICAL_PHARMACY_2025ChanImpact_of_artificial_intelligence_on_future.pdf",
    "AI Applications": "['Research and Clinical Trial AI']",
    "Category": "Academic Institution",
    "predicted_specialty": "unclassified",
    "Year": 2025,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://ijetrm.com/issues/files/Feb-2024-09-1739120836-DEC2024-44.pdf",
    "AI Applications": "['Research and Clinical Trial AI', 'Clinical Documentation AI', 'Patient-facing AI', 'Medical Imaging AI', 'Predictive Analytics', 'Education and Training AI', 'Clinical Decision Support', 'Operational and Administrative Automation', 'Robotics and Surgical AI', 'Public Health AI']",
    "Category": "Professional Medical Organization",
    "predicted_specialty": "unclassified",
    "Year": 2024,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Transparency and Explainability, Ethics and Consent, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.ahima.org/media/3uxho00o/health-data-literacy-microcredential.pdf",
    "AI Applications": [],
    "Category": "Professional Medical Organization",
    "predicted_specialty": "unclassified",
    "Year": 2023,
    "Focus Areas": "Bias and Fairness, Transparency and Explainability, Ethics and Consent, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.ama-assn.org/system/files/a25-saturday-tote.pdf",
    "AI Applications": [],
    "Category": "Professional Medical Organization",
    "predicted_specialty": "surgery, Obstetrics_Gynecology, oncology, psychiatry, pediatrics, ophthalmology, infectious_diseases",
    "Year": 2025,
    "Focus Areas": "Reliability and Performance, Privacy and Security, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://minnesota.himss.org/sites/hde/files/2024-02/himss_newsletter_aug2023.pdf",
    "AI Applications": [],
    "Category": "Professional Medical Organization",
    "predicted_specialty": "unclassified",
    "Year": 2023,
    "Focus Areas": "Reliability and Performance, Privacy and Security",
    "State": ""
  },
  {
    "URL": "https://www.aha.org/system/files/media/file/2024/11/2025-Health-Care-Workforce-Scan-Executive-Summary.pdf",
    "AI Applications": "['Operational and Administrative Automation']",
    "Category": "Professional Medical Organization",
    "predicted_specialty": "unclassified",
    "Year": 2025,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Transparency and Explainability, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://osp.od.nih.gov/wp-content/uploads/FCCCER-Report-to-the-President-and-Congress-2009.pdf",
    "AI Applications": [],
    "Category": "Federal",
    "predicted_specialty": "surgery, oncology, cardiology, endocrinology, psychiatry",
    "Year": 2009,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Safety and Risk Management",
    "State": ""
  },
  {
    "URL": "https://heal.nih.gov/files/2025-02/hsp-optimizing-interventions-executive-summary.pdf",
    "AI Applications": [],
    "Category": "Federal",
    "predicted_specialty": "unclassified",
    "Year": 2024,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://datascience.nih.gov/sites/default/files/AI_workshop_report_summary_01-16-19_508.pdf",
    "AI Applications": "['Research and Clinical Trial AI', 'Medical Imaging AI', 'Patient-facing AI', 'Public Health AI']",
    "Category": "Federal",
    "predicted_specialty": "radiology, neurology",
    "Year": 2018,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Transparency and Explainability",
    "State": ""
  },
  {
    "URL": "https://www.cms.gov/files/document/mm12071.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "unclassified",
    "Year": 2021,
    "Focus Areas": "Reliability and Performance, Privacy and Security, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.cms.gov/files/document/r10505cp.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "unclassified",
    "Year": 2021,
    "Focus Areas": "Reliability and Performance, Privacy and Security, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.cdc.gov/genomics/media/pdfs/Ginsburg_2021_508.pdf",
    "AI Applications": [],
    "Category": "Federal",
    "predicted_specialty": "unclassified",
    "Year": 2021,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Transparency and Explainability, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://rojournals.org/wp-content/uploads/2024/12/ROJESR-33-P6.pdf",
    "AI Applications": [],
    "Category": "Academic Institution",
    "predicted_specialty": "unclassified",
    "Year": 2024,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Transparency and Explainability",
    "State": ""
  },
  {
    "URL": "https://assistcenter.org/wp-content/uploads/2019/09/NSFWorkshop_Report-082119-v2.pdf",
    "AI Applications": "['Medical Imaging AI']",
    "Category": "Academic Institution",
    "predicted_specialty": "unclassified",
    "Year": 2019,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Transparency and Explainability, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.scitepress.org/Papers/2024/128979/128979.pdf",
    "AI Applications": "['Education and Training AI', 'Research and Clinical Trial AI', 'Public Health AI', 'Predictive Analytics']",
    "Category": "Academic Institution",
    "predicted_specialty": "unclassified",
    "Year": 2024,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Transparency and Explainability, Ethics and Consent, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.ijsat.org/papers/2025/1/2438.pdf",
    "AI Applications": "['Predictive Analytics']",
    "Category": "Academic Institution",
    "predicted_specialty": "radiology",
    "Year": 2025,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Transparency and Explainability, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://psb.stanford.edu/psb-online/proceedings/psb25/prince.pdf",
    "AI Applications": "['Research and Clinical Trial AI', 'Clinical Decision Support', 'Medical Imaging AI']",
    "Category": "Academic Institution",
    "predicted_specialty": "oncology, neurology",
    "Year": 2025,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://phuse.s3.eu-central-1.amazonaws.com/Archive/2025/Connect/US/Orlando/PAP_ML24.pdf",
    "AI Applications": "['Research and Clinical Trial AI', 'Operational and Administrative Automation', 'Public Health AI']",
    "Category": "Professional Medical Organization",
    "predicted_specialty": "unclassified",
    "Year": 2025,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://phuse.s3.eu-central-1.amazonaws.com/Archive/2025/Connect/US/Orlando/PAP_PD10.pdf",
    "AI Applications": "['Research and Clinical Trial AI']",
    "Category": "Professional Medical Organization",
    "predicted_specialty": "unclassified",
    "Year": "",
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.multiperspectivesjournal.com/uploads/archives/20250331124203_11.pdf",
    "AI Applications": "['Clinical Decision Support', 'Predictive Analytics', 'Education and Training AI', 'Research and Clinical Trial AI', 'Medical Imaging AI', 'Patient-facing AI', 'Robotics and Surgical AI', 'Public Health AI']",
    "Category": "Academic Institution",
    "predicted_specialty": "radiology",
    "Year": 2024,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Transparency and Explainability, Ethics and Consent, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.cureus.com/articles/281861-a-review-of-the-regulatory-challenges-of-personalized-medicine.pdf",
    "AI Applications": "['Clinical Decision Support', 'Research and Clinical Trial AI']",
    "Category": "Academic Institution",
    "predicted_specialty": "oncology, pathology, pulmonology, rheumatology",
    "Year": 2024,
    "Focus Areas": "Reliability and Performance, Transparency and Explainability, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.inovigate.com/media/filer_public/6c/4b/6c4bd89a-e272-4a76-a473-2d979c787340/report_athena__the_use_of_rwd_for_personalized_medicine_final_template_used.pdf",
    "AI Applications": "['Research and Clinical Trial AI']",
    "Category": "Professional Medical Organization",
    "predicted_specialty": "oncology",
    "Year": 2022,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Transparency and Explainability, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://legacy.himss.org/sites/hde/files/media/file/2024/06/17/himss-professional-development-course-catalog.pdf",
    "AI Applications": [],
    "Category": "Academic Institution",
    "predicted_specialty": "unclassified",
    "Year": "",
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent",
    "State": ""
  },
  {
    "URL": "https://centralnorthflorida.himss.org/sites/hde/files/media/file/2024/03/21/ppt-cnflhimss-its-all-about-the-data-workshop-data-management-fundamentals-2019-05-03.pdf",
    "AI Applications": [],
    "Category": "Academic Institution",
    "predicted_specialty": "unclassified",
    "Year": 2019,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://www.tn.gov/content/dam/tn/finance/aicouncil/documents/STS%20Roadmap%20for%20AI.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "unclassified",
    "Year": "",
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": "Tennessee"
  },
  {
    "URL": "https://www.medrxiv.org/content/10.1101/2024.10.23.24315991v1.full.pdf",
    "AI Applications": "['Research and Clinical Trial AI', 'Public Health AI']",
    "Category": "Academic Institution",
    "predicted_specialty": "infectious_diseases",
    "Year": 2024,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://aclanthology.org/2023.clinicalnlp-1.39.pdf",
    "AI Applications": [],
    "Category": "Academic Institution",
    "predicted_specialty": "unclassified",
    "Year": 2023,
    "Focus Areas": "Bias and Fairness, Transparency and Explainability, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://hscrc.maryland.gov/Documents/March%202025%20PUBLIC%20POST-MEETING%20Materials%20-%20finalv2.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "unclassified",
    "Year": 2025,
    "Focus Areas": "Reliability and Performance, Safety and Risk Management, Governance Committees",
    "State": "Maryland"
  },
  {
    "URL": "https://hscrc.maryland.gov/Documents/AHEAD/MD%20AHEAD%20Application%20FINAL%20PUBLIC%2003152024.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "unclassified",
    "Year": "",
    "Focus Areas": "Reliability and Performance, Privacy and Security, Safety and Risk Management, Governance Committees",
    "State": "Maryland"
  },
  {
    "URL": "https://www.tn.gov/content/dam/tn/health/documents/PH-3549.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "radiology",
    "Year": "",
    "Focus Areas": "Reliability and Performance, Privacy and Security, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": "Tennessee"
  },
  {
    "URL": "https://hscrc.maryland.gov/Documents/Modernization/Regional%20Partnership%20%20Docs/Baltimore%20Metropolitan%20Diabetes%20Regional%20Partnership%20Full%20Proposal.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "endocrinology",
    "Year": 2020,
    "Focus Areas": "Reliability and Performance, Safety and Risk Management",
    "State": "Maryland"
  },
  {
    "URL": "https://aitaskforce.alabama.gov/wp-content/uploads/2024/04/Microsoft-AI-Procurement-Paper_Final.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "unclassified",
    "Year": 2023,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": "Alabama"
  },
  {
    "URL": "https://www.tn.gov/content/dam/tn/health/healthprofboards/medicalexaminers/MD_SP_Application.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "unclassified",
    "Year": 2019,
    "Focus Areas": "Privacy and Security, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": "Tennessee"
  },
  {
    "URL": "https://hscrc.maryland.gov/Documents/QBR%20RY%202024%20Final%20Approved%20File.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "unclassified",
    "Year": 2021,
    "Focus Areas": "Reliability and Performance, Safety and Risk Management, Governance Committees",
    "State": "Maryland"
  },
  {
    "URL": "https://www.tn.gov/content/dam/tn/tacir/2020publications/2020GPSmonitoring.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "unclassified",
    "Year": 2020,
    "Focus Areas": "Privacy and Security, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": "Tennessee"
  },
  {
    "URL": "https://prod.drupal.gaotest.org/assets/gao-21-7sp.pdf",
    "AI Applications": "['Clinical Documentation AI', 'Education and Training AI', 'Operational and Administrative Automation', 'Public Health AI', 'Patient-facing AI', 'Research and Clinical Trial AI', 'Robotics and Surgical AI', 'Medical Imaging AI', 'Clinical Decision Support', 'Predictive Analytics']",
    "Category": "Academic Institution",
    "predicted_specialty": "surgery",
    "Year": 2020,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://insurance.maryland.gov/Insurer/Documents/bulletins/24-11-The-Use-of-Artificial-Intelligence-Systems-in-Insurance.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "unclassified",
    "Year": 2024,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": "Maryland"
  },
  {
    "URL": "https://prod.drupal.gaotest.org/assets/880/874488.pdf",
    "AI Applications": [],
    "Category": "Professional Medical Organization",
    "predicted_specialty": "unclassified",
    "Year": 2024,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://apps.legislature.ky.gov/CommitteeDocuments/7/12012/Nov%2018%202019%20Gaedeke%20-%20LARA%20MAPS%20Presentation.pdf",
    "AI Applications": [],
    "Category": "State",
    "predicted_specialty": "unclassified",
    "Year": 2019,
    "Focus Areas": "Reliability and Performance, Privacy and Security, Safety and Risk Management, Governance Committees",
    "State": "Kentucky"
  },
  {
    "URL": "https://jtc1info.org/wp-content/uploads/2023/12/Overview_of_ISO_IEC_workshop_Wael.pdf",
    "AI Applications": [],
    "Category": "Academic Institution",
    "predicted_specialty": "unclassified",
    "Year": 2023,
    "Focus Areas": "Bias and Fairness, Reliability and Performance, Privacy and Security, Transparency and Explainability, Ethics and Consent, Safety and Risk Management, Governance Committees",
    "State": ""
  },
  {
    "URL": "https://ceur-ws.org/Vol-3442/paper-51.pdf",
    "AI Applications": [],
    "Category": "Academic Institution",
    "predicted_specialty": "nephrology",
    "Year": 2023,
    "Focus Areas": "Bias and Fairness, Transparency and Explainability, Safety and Risk Management, Governance Committees",
    "State": ""
  }
];

// Helper function to parse AI Applications string
function parseAIApplications(aiAppsString: string | any[]): string[] {
  if (Array.isArray(aiAppsString)) {
    return aiAppsString;
  }
  
  if (typeof aiAppsString === 'string' && aiAppsString.trim()) {
    try {
      // Remove outer quotes and parse as array
      const cleaned = aiAppsString.replace(/^'|'$/g, '').replace(/^\[|\]$/g, '');
      if (cleaned.trim() === '') return [];
      
      return cleaned.split("', '").map(app => app.replace(/^'|'$/g, '').trim()).filter(app => app);
    } catch {
      return [];
    }
  }
  
  return [];
}

// Helper function to parse Focus Areas
function parseFocusAreas(focusAreasString: string): string[] {
  if (!focusAreasString || focusAreasString.trim() === '') return [];
  
  return focusAreasString
    .split(',')
    .map(area => area.trim())
    .filter(area => area);
}

// Helper function to parse Clinical Categories from predicted_specialty
function parseClinicalCategories(specialtyString: string): string[] {
  if (!specialtyString || specialtyString === 'unclassified') return [];
  
  const specialtyMap: Record<string, string> = {
    'surgery': 'Surgery',
    'oncology': 'Oncology',
    'radiology': 'Radiology',
    'cardiology': 'Cardiology',
    'pathology': 'Pathology',
    'gastroenterology': 'Gastroenterology',
    'endocrinology': 'Endocrinology',
    'pulmonology': 'Pulmonology',
    'nephrology': 'Nephrology',
    'psychiatry': 'Psychiatry',
    'pediatrics': 'Pediatrics',
    'neurology': 'Neurology',
    'infectious_diseases': 'Infectious Diseases',
    'Obstetrics_Gynecology': 'Obstetrics and Gynecology',
    'ophthalmology': 'Ophthalmology',
    'otolaryngology': 'Otolaryngology',
    'rheumatology': 'Rheumatology',
    'hematology': 'Hematology',
    'dermatology': 'Dermatology'
  };
  
  return specialtyString
    .split(',')
    .map(specialty => specialty.trim())
    .map(specialty => specialtyMap[specialty] || specialty)
    .filter(specialty => specialty && specialty !== 'unclassified');
}

// Helper function to normalize category names
function normalizeCategory(category: string): string {
  const categoryMap: Record<string, string> = {
    'Federal': 'Federal government',
    'State': 'State government',
    'Academic Institution': 'Academic institution (.edu)',
    'Professional Medical Organization': 'Professional medical organization',
    'Nonprofit': 'Nonprofit org'
  };
  
  return categoryMap[category] || category;
}

// Helper function to generate document title from URL
function generateTitle(url: string): string {
  try {
    const urlObj = new URL(url);
    const pathname = urlObj.pathname;
    const filename = pathname.split('/').pop() || '';
    
    // Remove file extension and decode
    const title = decodeURIComponent(filename)
      .replace(/\.(pdf|doc|docx)$/i, '')
      .replace(/[-_]/g, ' ')
      .replace(/\b\w/g, l => l.toUpperCase());
    
    return title || 'AI Governance Document';
  } catch {
    return 'AI Governance Document';
  }
}

// Helper function to generate description
function generateDescription(item: any): string {
  const parts = [];
  
  if (item.Category) {
    parts.push(`Document from ${normalizeCategory(item.Category)}`);
  }
  
  if (item.State) {
    parts.push(`published in ${item.State}`);
  }
  
  if (item.Year && item.Year.toString().trim() !== '') {
    parts.push(`in ${item.Year}`);
  }
  
  const focusAreas = parseFocusAreas(item['Focus Areas']);
  if (focusAreas.length > 0) {
    parts.push(`focusing on ${focusAreas.slice(0, 3).join(', ')}`);
    if (focusAreas.length > 3) {
      parts.push(`and ${focusAreas.length - 3} other areas`);
    }
  }
  
  return parts.join(' ') + '.';
}

// Transform raw data to Document format
export const processedDocuments: Document[] = rawData.map((item, index) => ({
  id: `doc-${index + 1}`,
  title: generateTitle(item.URL),
  url: item.URL,
  aiApplications: parseAIApplications(item['AI Applications']),
  category: normalizeCategory(item.Category),
  state: item.State || '',
  year: item.Year && item.Year.toString().trim() !== '' ? parseInt(item.Year.toString()) : null,
  focusAreas: parseFocusAreas(item['Focus Areas']),
  clinicalCategories: parseClinicalCategories(item.predicted_specialty),
  description: generateDescription(item)
}));

export default processedDocuments;