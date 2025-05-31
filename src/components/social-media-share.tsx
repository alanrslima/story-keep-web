export function SocialMediaShare() {
  return (
    <>
      <WhatsAppShare />
      <EmailShare />
    </>
  );
}

export const WhatsAppShare = () => {
  const message = "Check this out!";
  const url = "https://example.com";
  const fullMessage = `${message} ${url}`;
  const encodedMessage = encodeURIComponent(fullMessage);
  const shareUrl = `https://wa.me/?text=${encodedMessage}`;

  return (
    <a href={shareUrl} target="_blank" rel="noopener noreferrer">
      Share on WhatsApp
    </a>
  );
};

const EmailShare = () => {
  const subject = "Check this out!";
  const body =
    "Hey, I found something interesting for you:\n\nhttps://example.com";

  const emailUrl = `mailto:?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;

  return <a href={emailUrl}>Share via Email</a>;
};
