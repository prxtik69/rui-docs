import {
  DocsContent,
  DocsHeading,
  DocsParagraph,
  DocsList,
  DocsListItem,
  DocsStrong
} from "@/components/docs-content"
import { Mail, Bug } from "lucide-react"

export default function ContributingPage() {
  return (
    <DocsContent>
      <DocsHeading level={1}>Contributing to Rui</DocsHeading>

      <DocsParagraph>
        We welcome contributions to Rui! Whether you want to improve the language, fix bugs, enhance documentation, or suggest new features, we&apos;d love to hear from you.
      </DocsParagraph>

      <div className="border rounded-lg p-6 my-8 bg-muted/50">
        <div className="flex items-center gap-3 mb-4">
          <Mail className="h-6 w-6 text-primary" />
          <DocsStrong>Get in Touch</DocsStrong>
        </div>
        <DocsParagraph>
          <a href="mailto:pratik@joyne.in">pratik@joyne.in</a>
        </DocsParagraph>
      </div>

      <DocsHeading level={2}>How to Contribute</DocsHeading>

      <DocsParagraph>
        All contributions are coordinated through direct contact. Simply email us with your ideas, and we&apos;ll work together to make them happen.
      </DocsParagraph>

      <DocsList ordered>
        <DocsListItem>Send an email to <DocsStrong><a href="mailto:pratik@joyne.in">pratik@joyne.in</a></DocsStrong></DocsListItem>
        <DocsListItem>Describe what you&apos;d like to contribute</DocsListItem>
        <DocsListItem>We&apos;ll discuss the details and next steps</DocsListItem>
        <DocsListItem>Start working on your contribution</DocsListItem>
      </DocsList>

      <DocsHeading level={2}>What We&apos;re Looking For</DocsHeading>

      <DocsList>
        <DocsListItem><DocsStrong>Bug fixes</DocsStrong> - Help us squash bugs and improve stability</DocsListItem>
        <DocsListItem><DocsStrong>New features</DocsStrong> - Suggest and implement new language features</DocsListItem>
        <DocsListItem><DocsStrong>Documentation</DocsStrong> - Improve guides, tutorials, and examples</DocsListItem>
        <DocsListItem><DocsStrong>Examples</DocsStrong> - Create sample programs and use cases</DocsListItem>
        <DocsListItem><DocsStrong>Tools</DocsStrong> - Build VS Code extensions, CLI tools, or other developer tools</DocsListItem>
        <DocsListItem><DocsStrong>Community</DocsStrong> - Help other users and spread the word about Rui</DocsListItem>
      </DocsList>

      <DocsHeading level={2}>Found a Bug?</DocsHeading>

      <DocsParagraph>
        If you encounter any issues with Rui or the documentation, please let us know. Your feedback helps us improve the language for everyone.
      </DocsParagraph>

      <div className="border rounded-lg p-6 my-8 bg-muted/50">
        <div className="flex items-center gap-3 mb-4">
          <Bug className="h-6 w-6 text-destructive" />
          <DocsStrong >Report Issues</DocsStrong>
        </div>
        <DocsParagraph>
          pratik@joyne.in
        </DocsParagraph>
      </div>

      <DocsHeading level={2}>Contribution Guidelines</DocsHeading>

      <DocsParagraph>
        When contributing to Rui, please:
      </DocsParagraph>

      <DocsList>
        <DocsListItem>Follow existing code style and patterns</DocsListItem>
        <DocsListItem>Test your changes thoroughly</DocsListItem>
        <DocsListItem>Update documentation for any new features</DocsListItem>
        <DocsListItem>Be respectful and collaborative</DocsListItem>
      </DocsList>

      <DocsHeading level={2}>Thank You</DocsHeading>

      <DocsParagraph>
        Every contribution, no matter how small, helps make Rui better. We appreciate your interest in helping improve the language and look forward to working with you.
      </DocsParagraph>
    </DocsContent>
  )
}
