#!/usr/bin/env python3
"""Generate a clean 1-page CV PDF -> static/Faith-Wachukwu-CV.pdf

Data is sourced from src/pages/work.tsx (EXPERIENCE / EDUCATION / CERTIFICATES).
This is a generated placeholder CV; replace with the canonical version when ready.
"""
from reportlab.lib.pagesizes import A4
from reportlab.lib.units import mm
from reportlab.lib import colors
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.enums import TA_LEFT
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, HRFlowable,
)

ACCENT = colors.HexColor("#2563eb")
DARK = colors.HexColor("#1e293b")
MUTED = colors.HexColor("#64748b")

styles = getSampleStyleSheet()

name = ParagraphStyle("name", parent=styles["Normal"], fontName="Helvetica-Bold",
                      fontSize=20, textColor=DARK, spaceAfter=2, leading=23)
title = ParagraphStyle("title", parent=styles["Normal"], fontName="Helvetica",
                       fontSize=11, textColor=ACCENT, spaceAfter=4, leading=14)
contact = ParagraphStyle("contact", parent=styles["Normal"], fontName="Helvetica",
                         fontSize=8.5, textColor=MUTED, spaceAfter=2, leading=12)
section = ParagraphStyle("section", parent=styles["Normal"], fontName="Helvetica-Bold",
                         fontSize=10.5, textColor=ACCENT, spaceBefore=10, spaceAfter=4,
                         leading=13)
role = ParagraphStyle("role", parent=styles["Normal"], fontName="Helvetica-Bold",
                      fontSize=9.5, textColor=DARK, leading=12)
meta = ParagraphStyle("meta", parent=styles["Normal"], fontName="Helvetica-Oblique",
                      fontSize=8, textColor=MUTED, leading=11, spaceAfter=2)
bullet = ParagraphStyle("bullet", parent=styles["Normal"], fontName="Helvetica",
                        fontSize=8.5, textColor=DARK, leading=11.5, leftIndent=8,
                        bulletIndent=0, spaceAfter=1.5, alignment=TA_LEFT)
body = ParagraphStyle("body", parent=styles["Normal"], fontName="Helvetica",
                      fontSize=8.5, textColor=DARK, leading=12, spaceAfter=2)


def hr():
    return HRFlowable(width="100%", thickness=0.6, color=colors.HexColor("#e2e8f0"),
                      spaceBefore=2, spaceAfter=4)


def job(r, company, location, period, bullets):
    flow = [Paragraph(f"{r} &middot; {company}", role),
            Paragraph(f"{period}  |  {location}", meta)]
    for b in bullets:
        flow.append(Paragraph(f"&bull; {b}", bullet))
    flow.append(Spacer(1, 4))
    return flow


def build(path):
    doc = SimpleDocTemplate(path, pagesize=A4,
                            leftMargin=16 * mm, rightMargin=16 * mm,
                            topMargin=14 * mm, bottomMargin=12 * mm,
                            title="Faith Wachukwu - CV",
                            author="Faith Wachukwu")
    el = []

    # Header
    el.append(Paragraph("Faith Wachukwu", name))
    el.append(Paragraph("Documentation Engineer &amp; Technical Writer", title))
    el.append(Paragraph(
        "Oslo, Norway (CET) &middot; Remote / open to relocation &middot; "
        "faithkovi@gmail.com &middot; faithkovi.xyz &middot; "
        "github.com/FaithKovi &middot; linkedin.com/in/faith-kovi", contact))
    el.append(hr())

    # Summary
    el.append(Paragraph("Summary", section))
    el.append(Paragraph(
        "Documentation Engineer with 3+ years building docs-as-code systems, API "
        "references, and developer guides. Drove an approximately 80% reduction in "
        "inbound support tickets at Clouddley by rebuilding the documentation around "
        "the Diataxis framework. KCNA-certified with a DevOps background across "
        "Kubernetes, AWS, GCP, Docker, and CI/CD; open-source contributor to Helm.",
        body))

    # Experience
    el.append(Paragraph("Experience", section))
    el.append(hr())
    for j in EXPERIENCE:
        el.extend(job(*j))

    # Two-column footer: Education / Certifications + Skills
    el.append(Paragraph("Education &amp; Certifications", section))
    el.append(hr())
    el.append(Paragraph("<b>BSc, Biochemistry</b> &middot; University of Port Harcourt (2016&ndash;2021)", body))
    el.append(Paragraph("<b>Kubernetes and Cloud Native Associate (KCNA)</b> &middot; 2024", body))

    el.append(Paragraph("Core Skills", section))
    el.append(hr())
    el.append(Paragraph(
        "<b>Documentation:</b> Diataxis, docs-as-code, API reference, developer guides, "
        "information architecture, Markdown/MDX, Docusaurus<br/>"
        "<b>Cloud &amp; DevOps:</b> Kubernetes, Helm, AWS, GCP, Docker, Terraform, "
        "GitHub Actions, CI/CD, observability<br/>"
        "<b>Open source:</b> Helm (helm-www), Kubernetes SIGs image-builder, CHAOSS Africa",
        body))

    doc.build(el)
    print("wrote", path)


EXPERIENCE = [
    ("Freelance Technical Writer", "Literally", "Oslo, Norway (Remote)",
     "Aug 2025 - Present", [
         "Create and maintain API documentation, onboarding guides, and product "
         "tutorials for SaaS and developer-tool clients.",
         "Collaborate with engineers and product managers to ensure accuracy and "
         "close gaps in technical content across audiences.",
     ]),
    ("Documentation Engineer", "Clouddley", "Delaware, USA (Remote)",
     "Jul 2023 - Dec 2025", [
         "Rebuilt product documentation around the Diataxis framework, letting users "
         "self-serve by intent instead of searching a flat help center.",
         "Drove an approximately 80% reduction in inbound support tickets by closing "
         "high-volume documentation gaps and rewriting onboarding content.",
         "Implemented docs-as-code workflows in Git with version control, peer review, "
         "and automated publishing alongside the product.",
     ]),
    ("Freelance DevOps Engineer", "Freelance", "Remote", "Nov 2022 - Jun 2023", [
        "Authored database migration runbooks and documented CI/CD pipelines built on "
        "AWS CodeBuild, CodeDeploy, and CodePipeline.",
        "Built reference documentation for AWS services (ECS Fargate, DynamoDB, Lambda).",
    ]),
    ("Junior DevOps/QA Engineer", "Grais", "New York, USA (Remote)",
     "Apr 2022 - Oct 2022", [
         "Automated deployments on ECS Fargate with GitHub Actions and maintained "
         "internal deployment guides and operational runbooks.",
     ]),
    ("Cloud Engineer Intern", "She Code Africa", "Lagos, Nigeria (Remote)",
     "Aug 2021 - Oct 2021", [
         "Containerized applications with Docker, provisioned GCP infrastructure with "
         "Terraform, and documented provisioning to speed up onboarding.",
     ]),
]

if __name__ == "__main__":
    build("static/Faith-Wachukwu-CV.pdf")
