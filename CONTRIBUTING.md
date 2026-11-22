# Contributing to Smart Order Processing

Thank you for your interest in contributing!

## Getting Started

1. Fork the repository
2. Clone your fork:
   ```bash
   git clone https://github.com/YOUR_USERNAME/smart-order-processing.git
   cd smart-order-processing
   ```
3. Create a feature branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```

## Setup

```bash
# Backend
cd src/backend
python3 -m venv .venv && source .venv/bin/activate
pip install -r requirements.txt

# Set your API key
cp .env.example .env
# Edit .env and add your GOOGLE_API_KEY

# Frontend
cd src/frontend
npm install
```

## Running Tests

```bash
# Backend tests (no API key needed — LLM calls are mocked)
pytest tests/ -v

# Frontend type check + build
cd src/frontend
npx tsc --noEmit
npm run build
```

All tests must pass before submitting a pull request.

## Pull Request Guidelines

- Keep PRs focused on one change
- Add tests for new backend functionality
- Make sure `pytest tests/ -v` passes locally
- Describe what your PR changes and why

## Areas to Contribute

- **Database persistence** — replace in-memory `_verlauf` list with PostgreSQL
- **PDF support improvements** — better parsing for complex PDFs
- **Frontend features** — filtering, search, export
- **More LLM providers** — add OpenAI or Mistral as alternatives

## Questions?

Open an issue on GitHub.
