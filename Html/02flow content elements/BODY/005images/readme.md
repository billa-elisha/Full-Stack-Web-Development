# images in html #
The \<img> tage is use to embade images into a web page

The \<picture> element or tag contains zero or more \<source> and one \<img> element which provide viersions of the image for different display or divices

The browser considers each child \<source> element and chooses the best match among them.

## The \<img> ##
the img tag contains some attributes
1. The **src** attribute holds the path to the image you want to embed. It is not mandatory if the **srcset** attribute is available. However, at least one of the src or srcset attributes must be provided.
2. The alt attribute holds a textual replacement for the image, which is mandatory and incredibly useful for accessibility — screen readers read the attribute value out to their users so they know what the image means. Alt text is also displayed on the page if the image can't be loaded for some reason: for example, network errors, content blocking, or link rot.