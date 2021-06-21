const mailSchema = mongoose.Schema(
  {
    destination: String,
    subject: String,
    message: String,
    phone: String,
    date: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

const Mail = mongoose.model('Mail', mailSchema);

export default Mail;
