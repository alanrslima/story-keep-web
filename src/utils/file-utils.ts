export class FileUtils {
  static generateFile = (photoString: string): File | undefined => {
    const contentType = photoString.split(";")[0].split(":")[1];
    const blob = FileUtils.base64ToBlob(photoString, contentType);
    return new File([blob], "image.png", { type: contentType });
  };

  private static base64ToBlob(base64: string, contentType = "") {
    const byteCharacters = atob(base64.split(",")[1]);
    const byteArrays = [];
    for (let i = 0; i < byteCharacters.length; i++) {
      byteArrays.push(byteCharacters.charCodeAt(i));
    }
    const byteArray = new Uint8Array(byteArrays);
    return new Blob([byteArray], { type: contentType });
  }
}
