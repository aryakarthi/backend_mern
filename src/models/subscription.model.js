import mongoose from "mongoose";

const subscriptionSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Subscription is required!"],
      trim: true,
      minLength: 3,
      maxLength: 100,
    },
    price: {
      type: Number,
      required: [true, "Price is required!"],
      min: [0, "Price must be greater than 0!"],
    },
    currency: {
      type: String,
      required: [true, "Currency is required!"],
      enum: ["USD", "EUR", "INR"],
      default: "USD",
    },
    frequency: {
      type: String,
      enum: ["DAILY", "WEEKLY", "MONTHLY", "YEARLY"],
    },
    category: {
      type: String,
      required: [true, "Category is required!"],
      enum: ["ENTERTAINMENT", "EDUCATION", "HEALTH", "SPORTS", "OTHERS"],
      default: "OTHERS",
    },
    paymentMethod: {
      type: String,
      required: [true, "Payment Method is required!"],
      trim: true,
    },
    status: {
      type: String,
      required: [true, "Status is required!"],
      enum: ["ACTIVE", "CANCELLED", "EXPIRED"],
      default: "ACTIVE",
    },
    startDate: {
      type: Date,
      required: [true, "Start Date is required!"],
      validate: {
        validator: function (value) {
          return value <= new Date();
        },
        message: "Start Date must be in the past!",
      },
    },
    renewalDate: {
      type: Date,
      required: [true, "Renewal Date is required!"],
      validate: {
        validator: function (value) {
          return value >= this.startDate;
        },
        message: "Renewal Date must be after Start Date!",
      },
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },
  },
  { timestamps: true }
);

// auto-calculate renewal date if missing
subscriptionSchema.pre("save", function (next) {
  if (!this.renewalDate) {
    const renewalPeriods = {
      DAILY: 1,
      WEEKLY: 7,
      MONTHLY: 30,
      YEARLY: 365,
    };

    this.renewalDate = new Date(this.startDate);
    this.renewalDate.setDate(
      this.renewalDate.getDate() + renewalPeriods[this.frequency]
    );
  }
  // auto-update the status if renewal date has passed
  if (this.renewalDate < new Date()) {
    this.status = "EXPIRED";
  }

  next();
});
