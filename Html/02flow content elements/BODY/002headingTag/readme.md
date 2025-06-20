# HEADING CONTENT #
it defines the title of a section

The heading elements are
* \<h1>...\<h6>
* \<hgroup>

Note: the \<header> element in html may contain a heading element but it is not a heading content itself

all heading elements creates a block-box in the  layout starting on a new line and taking the full width available in their containing box

1. Heading information can be use by user agents to contract a table of content for a document automatically
2. Do not use heading elements to resize text use css
3. Do not skip heading levels always start with \<h1> in that order.
4. avoid using multiple \<h1> elements on one page
## \<hgroup> tag ##
It is use to represent a heading and its related content (secondary content) eg
* subheadings
* altenative title
* tagline

it has no effect on the document it self but add some outline to the document.
and all these should be in a \<p> tag

it groups a single \<h1>-\<h6> with one or more \<p> tags