## MODIFIED Requirements

### Requirement: Hero section
The hero SHALL be the first section under the header, present the owner's name, a role or headline, a short tagline, calls to action for viewing projects and contacting, and SHALL display the owner's hero image.

#### Scenario: Hero presents key identity information
- **WHEN** the home page is rendered
- **THEN** the hero displays the owner's name "Noor Aslam", a headline describing their role, and a one-to-two sentence tagline

#### Scenario: Hero provides primary and secondary actions
- **WHEN** the hero is rendered
- **THEN** it provides a primary call to action that scrolls to the Projects section and a secondary call to action that scrolls to the Contact section

#### Scenario: Hero displays the owner's image
- **WHEN** the hero is rendered
- **THEN** the owner's hero image is displayed with an appropriate text alternative

### Requirement: About section
The About section SHALL introduce the owner with a short bio and a small set of highlight facts (such as location, focus, or current role). The bio SHALL describe the owner as a Software Engineering student and web developer interested in building clean, responsive, and user-friendly websites.

#### Scenario: About presents a bio
- **WHEN** the About section is rendered
- **THEN** it shows a professional bio describing Noor Aslam as a Software Engineering student and web developer focused on clean, responsive, and user-friendly websites

#### Scenario: About presents highlight facts
- **WHEN** the About section is rendered
- **THEN** it shows at least two highlight facts about the owner

#### Scenario: About shows the owner's location
- **WHEN** the About section is rendered
- **THEN** it shows the owner's location as Peshawar, Pakistan

### Requirement: Skills section
The Skills section SHALL present the owner's skills grouped into categories (for example Languages, Frameworks, Tools), rendered as readable tag-style items, and SHALL include WordPress among the listed skills.

#### Scenario: Skills are grouped by category
- **WHEN** the Skills section is rendered
- **THEN** skills are displayed grouped under category headings

#### Scenario: Skills are readable at a glance
- **WHEN** a user views a skill item
- **THEN** each skill is presented as a distinct, readable tag or label

#### Scenario: WordPress is listed among the skills
- **WHEN** the Skills section is rendered
- **THEN** WordPress appears among the skills while JavaScript and all other existing skills remain listed

### Requirement: Projects section
The Projects section SHALL present exactly six project cards, each showing a visual placeholder, title, short description, associated technologies, and links for demo and code where applicable.

#### Scenario: Project cards render consistent content
- **WHEN** the Projects section is rendered
- **THEN** each project card shows a visual placeholder, a title, a short description, and technology labels

#### Scenario: Exactly six projects are displayed
- **WHEN** the Projects section is rendered
- **THEN** exactly six project cards are shown

#### Scenario: Project links are available
- **WHEN** a project provides demo or code links
- **THEN** the card exposes working links that open in a new tab

#### Scenario: Grid adapts to viewport
- **WHEN** the viewport changes from mobile to desktop width
- **THEN** project cards reflow from a single column into a multi-column grid

### Requirement: Contact section
The Contact section SHALL invite visitors to get in touch, present an email contact method using `nooraslamchannel@gmail.com`, and expose the owner's social profile links.

#### Scenario: Contact invites action
- **WHEN** the Contact section is rendered
- **THEN** it shows a clear call-to-action and an email contact link

#### Scenario: Contact email is the owner's address
- **WHEN** the Contact section is rendered
- **THEN** the email contact link targets `nooraslamchannel@gmail.com`

#### Scenario: Social links are present
- **WHEN** the Contact section is rendered
- **THEN** it shows links to the owner's social profiles, opening in a new tab
