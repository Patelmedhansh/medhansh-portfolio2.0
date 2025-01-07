export function Footer() {
  return (
    <footer className="border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center justify-center space-y-2">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Medhansh Patel. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Made with ❤️ by Medhansh Patel
          </p>
        </div>
      </div>
    </footer>
  )
}